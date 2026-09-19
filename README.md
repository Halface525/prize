# 半面奖 · The Halface Prize

> The Halface Prize does not reward merit. It rewards the interesting: the developer
> with the lowest AI use, the student with the least screen time, the campus cat, the
> battery that never swelled. Drawn every Friday after the A-share close. The whole
> balance is split among the laureates; the account then returns to zero.

**有趣足矣。**

不奖励优绩，只奖励有趣——奖励在互联网行业从事开发工作而人工智能使用率最低者、
大学生中电子产品使用时间最少者、在电子科技大学食堂用餐次数最多者，以及
在生活中表现出同等有趣品质的人、动物、人工智能与器物。

每周五 A 股收盘后开始评选。奖金为奖金账户的全部现金余额，由当期获奖者平分，
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

**React 19 + Vite 6 + Tailwind CSS 4 + react-router 7**，`react-markdown` 渲染正文，中英双语。
与 halface 博客同一套栈，但**去掉了 `gray-matter`**。

> **为什么没有 gray-matter**：本项目所有元数据都放在 `src/data/` 的 JS 模块里，
> markdown 只写正文，不需要解析 frontmatter。删掉它连带去掉了
> `vite-plugin-node-polyfills` ——`gray-matter` 依赖 Node 的 `Buffer`，而那个 polyfill
> 存在的唯一理由就是它。
>
> 这不是洁癖：**那个组合曾经让整站在运行时报 `Buffer is not defined`，而 `npm run build`
> 照样成功**，没有任何提示。删掉等于永久消除这类故障。顺带包小了 121 kB（gzip 31 kB）。
>
> 若日后确实要用 frontmatter：装回 `gray-matter`，**并同时**在 `vite.config.js` 恢复
> `nodePolyfills({ include: ['buffer'] })`。两者缺一不可，只加前者就会重现那个 bug。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 产物在 dist/
npm run preview    # 预览构建产物
npm run check      # lint + 双语一致性校验（提交前跑一下）
```

`npm run check:i18n` 单独跑双语校验。它查四件事：源码引用了但字典没定义的 key、
zh/en 结构是否对应、动态取值（`t.nav[item.id]` 这类）的目标是否存在、
该是函数的文案是不是函数。

**这类漏 key 构建期不报错**，只在运行时渲染出 `undefined`，所以值得单独查。
脚本在 `scripts/check-i18n.mjs`，退出码非 0 表示有问题，可以直接挂进 CI 或 pre-commit。

> 数据层（`src/data/*.js`）刻意保持「纯 JS、可被 Node 直接 import」，
> 所以里面的相对导入**显式写了 `.js` 扩展名**（Vite 不要求，Node 的 ESM 解析器要求）。
> 这样数据层可以脱离构建单独跑校验脚本。组件层不受此约束。

## 每周开奖要改的东西

只有三处，不碰任何组件：

**1. 写正文** —— 在 `public/content/draws/` 下加两个文件，**只写「获奖理由」本身，不写 frontmatter**：

> **开头不要再抄一遍奖项名、获奖者、公示数据。** 详情页顶部有结构化区块渲染这些
> （米色抬头条 + 金色竖线的获奖人块），正文里再写一遍就会和它打架。
> 正文从「本奖于……」这类事实陈述直接开始。需要再加小标题时用 `###`，
> 比如 `### 委员会备注`。

```
public/content/draws/2026-09-25.md       # 中文
public/content/draws/2026-09-25.en.md    # 英文
```

**2. 登记整期** —— 在 `src/data/draws.js` 数组最前面加一项，元数据全在这里：

```js
{
  id: "2026-09-25",
  period: 2,
  date: "2026-09-25",
  pool: 800.00,
  perWinner: 800.00,
  balanceAfter: 0,
  file: "content/draws/2026-09-25.md",
  winners: [
    {
      name: "化名",
      nameEn: "A pseudonym",
      domainId: "body",          // 外键，必须是 domains.js 里的 id
      award: "食堂就餐次数最多奖",
      awardEn: "Most Canteen Meals Prize",
      metricLabel: "全学期就餐次数",
      metricLabelEn: "Meals in a full term",
      metric: "412",
    },
  ],
},
```

**本期空缺**（无人获奖）时把 `winners` 留成空数组 `[]` 即可 —— 卡片会显示「本期空缺」，
详情页会显示空缺说明。空缺按期数正常编号，不顺延、不合并。

> **`domainId` 是外键，`award` 是字面值**，这个不对称是故意的：
>
> - `domainId` 指向 `domains.js`，领域名从那里取。领域改名时历史记录跟着变，不会烂掉；
>   获奖名单的领域筛选也靠它。**别在这里硬编码中文领域名。**
> - `award` 则照实记录当时授予的奖项名。章程第三十三条：开奖记录一经公示不予修改，
>   所以这里记的是「当时颁了什么」，不跟着奖项库改名走。

> **为什么元数据不放 markdown 的 frontmatter 里**：列表页（获奖名单）要显示获奖人，
> 若获奖人存在 frontmatter，列表页就得把每一期的 md 都拉一遍，期数一多就废了。
> 所以元数据全部集中在 `draws.js`，markdown 只留正文。公报用的是同一套存法。

**3. 更新余额** —— 改 `src/data/fund.js` 里的 `balance` 和 `updatedAt`。

> 章程第十一条：每次开奖后账户归零。所以开奖后这个数字应该变小，不是变大。
>
> **这里只记当前余额，没有收支流水** —— 本奖不公示流水（刻意如此）。
> 章程第三十二条要求公示的是「开奖后的账户余额」，那个数字在每一期的
> 开奖记录里（`draws.js` 的 `balanceAfter`），已经公示了。

**4.（可选）发一条公报** —— 开奖预告、空缺说明、勘误、章程修订、委员会声明，
以及对获奖者的通讯。详见下节。开奖内容不要在这里重复。

## 公报

「公报」放**关于这个奖本身**的正式文本，与「获奖名单」分工明确：

| 栏目 | 放什么 |
| --- | --- |
| 获奖名单 | **结果** —— 谁赢了、赢了什么、获奖理由 |
| 公报 · 公告 | 开奖预告、空缺说明、勘误、章程修订、委员会声明 |
| 公报 · 通讯 | 对获奖者的报道——谈话记录、介绍、侧记 |

**开奖内容只在获奖名单出现，公报不重复。** 两个栏目一旦互相覆盖，就都会变得可有可无。

**「通讯」而不是「访谈」**：访谈太窄，介绍、侧记、人物特写都放不进去。通讯是中文新闻学里
「比消息长、有描写、基于采访写成的报道」的标准体裁，**人物通讯**正是「介绍一个人」的写法。
「新闻」也宽，但跟「公告」不在一个语域——公报里放「公告 / 新闻」像企业官网的新闻中心。

新增一条：

**1. 加正文** —— 在 `public/content/bulletin/` 下加两个文件（纯正文，**不写 frontmatter**）：

```
public/content/bulletin/2026-09-25-something.md       # 中文
public/content/bulletin/2026-09-25-something.en.md    # 英文
```

**2. 登记** —— 在 `src/data/bulletin.js` 数组最前面加一项：

```js
{
  id: "2026-09-25-something",
  kind: "notice",              // notice（公告）| dispatch（通讯）
  date: "2026-09-25",
  title: "标题",
  titleEn: "Title",
  file: "content/bulletin/2026-09-25-something.md",
},
```

> 注意公报和开奖记录的存法**不一样**，这是故意的：开奖记录的获奖人数据只有详情页用得上，
> 所以放 markdown 的 frontmatter；公报的元数据（标题、日期、类别）列表页就要用，
> 全放 `src/data/bulletin.js`，markdown 只写正文，避免两处维护同一份信息。

**写通讯时注意**：全站都是公文腔，通讯是唯一能出现真人声音的地方，笑点就在两种语域的
碰撞——委员会用公文腔提问或叙述，获奖者用正常人的话回答。**获奖者一开口就是公文腔，这块地就废了。**
参照首页 `originClosing` 那句 "do something interesting."，那是全站唯一一处不是公文腔的收尾。

栏目做成**只有公告也完全成立**的形态。通讯要真写（约人、提问、整理），没把握时不要承诺频率。

## 章程锚点

章程的每一章、每一条都有锚点 id，供全站「依据章程第X条」这类说法精确跳转：

```
/charter#ch-2     第二章 奖金
/charter#art-11   第十一条 归零原则
```

id 由 `src/utils/charterAnchors.js` 从文本自动推导（`第二章` → `ch-2`，`第十一条` → `art-11`），
中英两版生成**相同的 id**，所以一条链接在两个语言下都成立。渲染在 `MarkdownBody.jsx` 里接上。

页面里写深链接用 helper，别手拼字符串：

```jsx
import { charterLink, charterRefClass } from "../utils/charter";

<Link to={charterLink.article(11)} className={charterRefClass}>章程第 11 条 →</Link>
```

> ⚠️ 必须用 react-router 的 `<Link>`，**不能用原生 `<a href="#art-11">`**。
> HashRouter 下原生 hash 会被路由器当成路径，跳到 `/art-11` 落到首页。

`charterAnchors.js` 是纯函数、无 React 依赖，改完可以单独跑一遍验证——
把中英两版章程的章条都解析一遍，比对 id 是否一致、条号有无跳号。

## 增设奖项

在 `src/data/awards.js` 里加一条，`domain` 填七大领域之一的 id
（`body` / `mind` / `labor` / `relations` / `expression` / `objects` / `nonhuman` / `useless`）。
中英字段都要填，`nameEn`、`criterionEn`、`subjectEn` 缺了会回退到中文。

**若这个奖项是某一期开奖时新创设的**，加上 `createdIn: <期次>`。
省略表示建库时已有（2026 年 9 月那批 24 项就是）。有值的话，
领域详情页会给它打一个「创设于第 N 期」的标记。

**七大领域本身在 `src/data/domains.js`，是章程级的，不要动** ——
动了既往开奖记录就没法归档了。

## 双语

- UI 文案：`src/i18n/zh.js` 和 `src/i18n/en.js`，两个文件结构必须一致
- 长文（章程、开奖记录）：同名加 `.en.md` 后缀，由 `localizedPath()` 自动切换
- 结构化数据：`xxx` / `xxxEn` 成对，由 `pick()` 取值，英文缺失自动回退中文

语言选择存在 `localStorage`，首次访问跟随浏览器语言。

## 页面结构

三个栏目都是**列表页 → 详情页**，路由各一个，别再往列表页里展开全文：

| 列表 | 详情 | 详情里放什么 |
| --- | --- | --- |
| `/winners` | `/winners/:id` | 「获奖理由」全文 + 上下期翻页 |
| `/domains` | `/domains/:id` | 该领域全部奖项 + 评选标准 + 上下领域翻页 |
| `/bulletin` | `/bulletin/:id` | 公告 / 通讯全文 |

其余路由：`/` 首页、`/charter` 章程、`/apply` 申请、`*` 404。
**404 是独立页面**，不再回落到首页——否则拼错 URL 会静默显示首页，很难发现。

**获奖名单可按领域筛选**，筛选按钮只列出「出过获奖者」的领域（全列出来会有大半是空的）。

**为什么获奖名单和奖项要折叠**：两者都会无限增长——一年 52 期开奖，奖项库每期还可能新增。
全铺在列表页上，几个月后就没法看了。

**但两处折叠的尺度不同**：

- **获奖名单**卡片保留获奖人姓名 + 领域 + 奖项 + 金额。收起来的是评语正文。
- **奖项**卡片**保留奖项名作为预览**（`DomainCard` 的 `maxAwards`，默认 4，首页窄卡片传 3）。
  「校园猫全勤奖」「从未鼓包奖」这些名字本身就是内容，全收进详情页就没了——
  收起来的只是评选标准那段较长的文字。

列表页都**不拉 markdown**，只用 `src/data/` 里的元数据，所以期数再多也不会有性能问题。
只有详情页才 `useArticle()` 取正文。

## 导航结构

主导航在 `src/data/site.js` 的 `navItems`，页脚用 `footerItems`（= 主导航 + `footerOnlyItems`）。

**导航栏只给「活的」内容。** 章程是静态文档，退到页脚和首页 hero 按钮；公报每周都有新的，
占那一格。所以 `charter` 在 `footerOnlyItems` 里，不在 `navItems` 里——别以为它漏了。

胶囊导航会滤掉 `apply`（它是右侧那个金色按钮），所以实际显示四项：首页 / 奖项 / 获奖名单 / 公报。
窄屏下约 300px，375px 屏幕刚够。**别再往这里加第五项。**

## 一处已知 lint 警告

`npm run lint` 会报 3 条 `react-refresh/only-export-components`，都指向 `src/i18n/index.jsx`
同时导出了组件（`I18nProvider`）和函数（`useI18n` / `pick` / `localizedPath`）。

**这是良性的**，不影响构建和线上行为。唯一代价是改 `src/i18n/*.js` 的文案时触发整页刷新
而不是热更新。要消掉得把非组件导出拆到另一个文件，会牵动十来处 import，暂时不值当。

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
