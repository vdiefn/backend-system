import request from "@/utils/request"
import type { loginForm, loginResponseData, userResponseData } from "./type"

//統一管理接口
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "user/info",
}

//暴露請求函數
//登陸接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//獲取用戶訊息接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
