import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base 用相对路径：既能部署在 username.github.io/prize/ 子路径，
// 也能直接用自定义域名部署在根路径，无需改配置。
//
// 这里曾经有 nodePolyfills({ include: ['buffer'] })，是为了给 gray-matter 补
// Node 的 Buffer。现已移除 gray-matter（元数据全部放在 src/data/ 的 JS 模块里，
// markdown 只写正文，不需要解析 frontmatter），所以 polyfill 也一并去掉了。
// 若日后要恢复 frontmatter，两者必须同时加回来 —— 只加 gray-matter 会在运行时
// 报 "Buffer is not defined"，而构建期不报错。
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
