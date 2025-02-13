//登陸接口需要的ts類型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

//登陸接口返回的數據類型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
//定義伺服器返回用戶訊息相關數據類型
interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: user
}
