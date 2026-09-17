import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// base 用相对路径：既能部署在 username.github.io/prize/ 子路径，
// 也能直接用自定义域名部署在根路径，无需改配置。
//
// nodePolyfills 是必需的，不能省：gray-matter 依赖 Node 的 Buffer，
// 浏览器里没有，省掉会在运行时报 "Buffer is not defined"，而构建期不报错。
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({ include: ['buffer'] }),
  ],
})
