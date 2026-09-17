# 半面奖 · The Halface Prize

> The Halface Prize does not reward merit. It rewards the interesting: the developer
> with the lowest AI use, the student with the least screen time, the campus cat, the
> battery that never swelled. Drawn every Friday after the A-share close. The whole
> balance is split among the laureates; the account then returns to zero.

**有趣足矣。**

不奖励优绩，只奖励有趣——奖励在互联网行业从事开发工作而人工智能使用率最低者、
大学生中电子产品使用时间最少者、在电子科技大学食堂用餐次数最多者，以及
在生活中表现出同等有趣品质的人、动物、人工智能与器物。

每周五 A 股收盘后开奖。奖金为奖金账户的全部现金余额，由当期获奖者平分，
**开奖后账户归零**。

申请走邮件：**halface16@gmail.com**

## 关于本仓库

源码开放。**任何人都可以用它搭建自己的奖项——唯一的要求是换一个名字。**

「半面奖 / The Halface Prize」仅指本奖，不包括任何衍生站点。

本奖**不接受任何社会捐助**，也不设立任何收款渠道。任何以「半面奖」名义
募集资金的行为均与本奖无关。

## 协议

代码以 [MIT](LICENSE) 授权。名称不在授权范围内。

---

# 维护者文档

以下内容与网站内容无关，是给自己看的。

## 技术栈

**React 19 + Vite 6 + Tailwind CSS 4 + react-router 7**，内容用 `gray-matter`
解析 frontmatter、`react-markdown` 渲染，中英双语。与 halface 博客同一套栈。

> ⚠️ `vite.config.js` 里的 `nodePolyfills({ include: ['buffer'] })` **不能删**。
> `gray-matter` 依赖 Node 的 `Buffer`，浏览器里没有它。
> 省掉的症状很阴——`npm run build` 照样成功，只有页面运行时报
> `Buffer is not defined`，所有 markdown 内容全部加载失败。代价是包大 17 kB。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物在 dist/
npm run preview  # 预览构建产物
```

## 每周开奖要改的东西

只有三处，不碰任何组件：

**1. 新增一期记录** —— 在 `public/content/draws/` 下加两个文件：

```
public/content/draws/2026-09-25.md       # 中文
public/content/draws/2026-09-25.en.md    # 英文
```

frontmatter 存结构化数据，正文写「获奖理由」（公文腔）：

```yaml
---
period: 2
date: "2026-09-25"
pool: 800.00
perWinner: 800.00
balanceAfter: 0
winners:
  - name: "化名"
    nameEn: "A pseudonym"
    domain: "身体"
    domainEn: "The Body"
    award: "食堂就餐次数最多奖"
    awardEn: "Most Canteen Meals Prize"
    metricLabel: "全学期就餐次数"
    metricLabelEn: "Meals in a full term"
    metric: "412"
---
```

**2. 登记期次** —— 在 `src/data/draws.js` 数组最前面加一行：

```js
{ id: "2026-09-25", period: 2, date: "2026-09-25", file: "content/draws/2026-09-25.md" },
```

**3. 更新余额** —— 改 `src/data/fund.js` 里的 `balance` 和 `updatedAt`。

> 章程第十一条：每次开奖后账户归零。所以开奖后这个数字应该变小，不是变大。

## 增设奖项

在 `src/data/awards.js` 里加一条，`domain` 填七大领域之一的 id
（`body` / `mind` / `labor` / `relations` / `expression` / `objects` / `nonhuman` / `useless`）。
中英字段都要填，`nameEn`、`criterionEn`、`subjectEn` 缺了会回退到中文。

**七大领域本身在 `src/data/domains.js`，是章程级的，不要动** ——
动了既往开奖记录就没法归档了。

## 双语

- UI 文案：`src/i18n/zh.js` 和 `src/i18n/en.js`，两个文件结构必须一致
- 长文（章程、开奖记录）：同名加 `.en.md` 后缀，由 `localizedPath()` 自动切换
- 结构化数据：`xxx` / `xxxEn` 成对，由 `pick()` 取值，英文缺失自动回退中文

语言选择存在 `localStorage`，首次访问跟随浏览器语言。

## 部署

用的是 **gh-pages 分支**，不走 GitHub Actions。

```powershell
.\deploy.ps1              # 提交信息默认 "deploy"
.\deploy.ps1 "第 2 期开奖"  # 自定义提交信息
```

**首次使用前先把脚本顶部的 `$RepoUrl` 改成仓库地址**——没改会直接报错退出，
不会误推到别处。

仓库设置：Settings → Pages → Source 选 `Deploy from a branch`，
Branch 选 `gh-pages`，目录 `/ (root)`。首次推上去之前该分支不存在，
下拉框里没有——先把代码推上去再回来设。

原理是源码留在 `main`、产物推到 `gh-pages`（孤儿分支，每次强制覆盖）。
这样克隆下来只有源码，不会攒一堆编译后的 JS。

### 两个注意事项

1. **用 HashRouter，不要改成 BrowserRouter** —— 否则刷新子路由会 404。
2. **`.nojekyll` 放在 `public/` 里**，构建时会自动复制到 `dist/` 根目录。
   GitHub Pages 默认跑 Jekyll，会忽略下划线开头的文件。
   `deploy.ps1` 会检查它是否存在，缺了会拒绝部署。

`vite.config.js` 里 `base: './'` 用的是相对路径，所以
`username.github.io/prize/` 和自定义域名根路径都能直接用，不用改配置。

### 国内访问

GitHub Pages 在中国大陆访问不稳定。这不影响申请——**申请走邮件，网站只是公示**。
若日后要迁到国内托管（OSS/COS + CDN），整站是纯静态无依赖的，可以整体搬走。

## 待补素材

- **`public/og.png`** —— 微信分享卡（1200×630）。`index.html` 已引用但文件还没做。
  微信不执行 JS，分享预览必须是静态图。同一张图也可以用作 GitHub 仓库的
  Social preview（Settings 页顶部），但那是两个不同的地方。
- **hero 的金色飘带**目前是内联 SVG 占位（`src/components/HeroCard.jsx`），
  要更接近参考站可以换成位图。

## 一处已知未决

**中文字体**：现在用 Google Fonts 的 Noto Serif SC，国内加载不出来。
若要治，自托管子集化字体，改 `index.html` 的 `<link>`。
