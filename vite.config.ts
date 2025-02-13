import { fileURLToPath, URL } from "node:url"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import { viteMockServe } from "vite-plugin-mock"
import path from "node:path"

// https://vite.dev/config/

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        enable: command === "serve", // 開發時可使用mock
      }),
      vueDevTools(),
      createSvgIconsPlugin({
        // 放置icon的文件夾位置
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    //scss全局變量配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/variable" as *;',
        },
      },
    },
  }
})
