# 部署到 GitHub Pages 的 gh-pages 分支（不走 Actions）
#
# 用法：
#   .\deploy.ps1                       # 提交信息默认 "deploy"
#   .\deploy.ps1 "第 2 期开奖"          # 自定义提交信息
#
# 原理：源码留在 main，构建产物推到 gh-pages（孤儿分支，每次强制覆盖）。
# 这样仓库克隆下来只有源码，不会攒一堆编译后的 JS。
#
# ⚠️ 本文件必须存为 UTF-8 with BOM。
# PowerShell 5.1 对没有 BOM 的 .ps1 会按系统 ANSI 码页（中文 Windows 上是 GBK）
# 解析，中文全变成乱码并直接语法报错，报错信息还完全指不到编码问题上。

param(
    [string]$Message = "deploy"
)

# ⚠️ 这里刻意不用 "Stop"，虽然直觉上更安全。
#
# PS 5.1 下 $ErrorActionPreference = "Stop" 会把原生命令写到 stderr 的任何输出
# 当成终止错误 —— 哪怕只是 git 在 CRLF 转换时打的一条 warning。
# 症状是脚本在 `git add` 那一步莫名其妙地死掉，报 NativeCommandError，
# 而真正的信息（LF will be replaced by CRLF）看起来像无关紧要的噪音。
#
# 改成显式检查 $LASTEXITCODE —— 那本来就是这里想表达的意思。
$ErrorActionPreference = "Continue"

# ↓↓↓ 改成你的仓库地址 ↓↓↓
$RepoUrl = "https://github.com/Halface525/prize.git"

if ($RepoUrl -like "*<你的用户名>*") {
    Write-Error "请先在本脚本顶部把 `$RepoUrl 改成你的仓库地址。"
    exit 1
}

# 原生命令没有异常可捕获，只能查退出码。每个 git / npm 调用后面都跟一次。
function Assert-LastExitCode([string]$What) {
    if ($LASTEXITCODE -ne 0) { throw "$What 失败（退出码 $LASTEXITCODE）" }
}

# 1. 构建（先删干净，避免上一次的产物混进来）
Write-Host "[1/4] 构建中…" -ForegroundColor Cyan
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
npm run build
Assert-LastExitCode "构建"

if (-not (Test-Path "dist/index.html")) {
    Write-Error "构建失败：dist/index.html 不存在。"
    exit 1
}
if (-not (Test-Path "dist/.nojekyll")) {
    Write-Error "构建失败：dist/.nojekyll 缺失。GitHub Pages 会按 Jekyll 处理，下划线开头的资源会被忽略。"
    exit 1
}

# 2. 在 dist 里建一个一次性的孤儿仓库
#    dist 每次构建都重建，所以这里永远是干净的，不会累积历史
Write-Host "[2/4] 准备 gh-pages 分支…" -ForegroundColor Cyan
Push-Location dist
try {
    git init -b gh-pages --quiet
    Assert-LastExitCode "git init"

    # 产物是构建出来的，不需要换行符转换。关掉它，顺便消掉那一堆 CRLF warning。
    git config core.autocrlf false

    git add -A
    Assert-LastExitCode "git add"

    # 不加 -c user.name/email：沿用全局 git 配置，这样 gh-pages 上的提交
    # 归到你自己的 GitHub 账号名下，而不是某个写死的邮箱
    git commit --quiet -m $Message
    Assert-LastExitCode "git commit"

    # 3. 推送（强制覆盖是预期的：这个分支只装产物，历史没有意义）
    Write-Host "[3/4] 推送到 $RepoUrl …" -ForegroundColor Cyan
    git remote add origin $RepoUrl
    Assert-LastExitCode "git remote add"

    git push --force origin gh-pages
    Assert-LastExitCode "推送"
}
finally {
    Pop-Location
}

Write-Host "[4/4] 完成。等约一分钟刷新线上页面。" -ForegroundColor Green
Write-Host "      若首页是白屏，先确认 Settings → Pages 的 Branch 已设为 gh-pages。" -ForegroundColor DarkGray
