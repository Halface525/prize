# 部署到 GitHub Pages 的 gh-pages 分支（不走 Actions）
#
# 用法：
#   .\deploy.ps1                       # 提交信息默认 "deploy"
#   .\deploy.ps1 "第 2 期开奖"          # 自定义提交信息
#
# 原理：源码留在 main，构建产物推到 gh-pages（孤儿分支，每次强制覆盖）。
# 这样仓库克隆下来只有源码，不会攒一堆编译后的 JS。

param(
    [string]$Message = "deploy"
)

$ErrorActionPreference = "Stop"

# ↓↓↓ 改成你的仓库地址 ↓↓↓
$RepoUrl = "https://github.com/Halface525/prize.git"

if ($RepoUrl -like "*<你的用户名>*") {
    Write-Error "请先在本脚本顶部把 `$RepoUrl 改成你的仓库地址。"
    exit 1
}

# 1. 构建（先删干净，避免上一次的产物混进来）
Write-Host "[1/4] 构建中…" -ForegroundColor Cyan
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
npm run build
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
    git add -A
    git -c user.name="halface" -c user.email="halface16@gmail.com" commit --quiet -m $Message
    if ($LASTEXITCODE -ne 0) { throw "提交失败" }

    # 3. 推送（强制覆盖是预期的：这个分支只装产物，历史没有意义）
    Write-Host "[3/4] 推送到 $RepoUrl …" -ForegroundColor Cyan
    git remote add origin $RepoUrl
    git push --force origin gh-pages
    if ($LASTEXITCODE -ne 0) { throw "推送失败，检查仓库地址和登录状态" }
}
finally {
    Pop-Location
}

Write-Host "[4/4] 完成。等约一分钟刷新线上页面。" -ForegroundColor Green
Write-Host "      若首页是白屏，先确认 Settings → Pages 的 Branch 已设为 gh-pages。" -ForegroundColor DarkGray
