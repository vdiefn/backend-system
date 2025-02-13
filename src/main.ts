import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhTw from "element-plus/es/locale/lang/zh-tw"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhTw,
})

// svg配置代碼
import "virtual:svg-icons-register"
//引入自定義插件對象
import globalComponent from "@/components"
//安裝自定義插件
app.use(globalComponent)
app.use(router)

app.mount("#app")
