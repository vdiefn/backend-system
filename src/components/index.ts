//引入項目中全部的全局組件
import SvgIcon from "./SvgIcon/index.vue"
import type { App, Component } from "vue"

//全局物件
const components: { [name: string]: Component } = { SvgIcon }

export default {
  //務必叫做install方法
  install(app: App) {
    //註冊項目全部的全局組件
    Object.keys(components).forEach((key) => {
      //註冊為全局組件
      app.component(key, components[key])
    })
  },
}
