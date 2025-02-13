import axios from "axios"
import { ElMessage } from "element-plus"

//1. 利用axios物件的create方法去創建axios實例
const request = axios.create({
  //基礎路徑
  baseURL: import.meta.env.VITE_APP_BASE_API, //基礎路徑上會攜帶/api
  timeout: 5000, //超時時間的設置
})

//2.request實例添加請求與響應攔截器
request.interceptors.request.use((config) => {
  //config配置對象，header經常給伺服器攜帶公共參數
  //返回配置對象
  return config
})

//3.響應攔截器
request.interceptors.response.use(
  (response) => {
    //成功的回調
    //獲得簡化資料
    return response.data
  },
  (error) => {
    //失敗的回調，處理http網路錯誤
    //定義變量用於存儲網路錯誤訊息
    let message = ""
    //http狀態碼
    let status = error.response.status
    switch (status) {
      case 401:
        message = "token過期"
        break
      case 403:
        message = "無權訪問"
        break
      case 404:
        message = "請求地址錯誤"
        break
      case 500:
        message = "伺服器出現問題"
        break
      default:
        message = "網路異常"
    }
    //提示錯誤訊息
    ElMessage({
      type: error,
      message,
    })
    return Promise.reject(error)
  },
)

export default request
