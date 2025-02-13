//使用者資訊
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "admin",
      password: "111111",
      desc: "平台管理員",
      roles: ["平台管理員"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token",
    },
    {
      userId: 2,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "system",
      password: "111111",
      desc: "系统管理員",
      roles: ["系统管理員"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token",
    },
  ]
}

export default [
  // 用戶登陸接口
  {
    url: "/api/user/login", //請求地址
    method: "post", //請求方式
    response: ({ body }) => {
      //取得請求攜帶過來的使用者名稱與密碼
      const { username, password } = body
      //呼叫獲取用戶資訊函數,用於判斷是否有此用戶
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      //沒有用戶回傳錯誤訊息
      if (!checkUser) {
        return { code: 201, data: { message: "帳號或密碼不正確" } }
      }
      //如果有返回成功訊息
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  // 獲取用戶資訊
  {
    url: "/api/user/info",
    method: "get",
    response: (request) => {
      //獲取請求攜帶token
      const token = request.headers.token
      //查看用戶資訊是否包含有次token用戶
      const checkUser = createUserList().find((item) => item.token === token)
      //没有返回錯誤的訊息
      if (!checkUser) {
        return { code: 201, data: { message: "取得用戶資訊失敗" } }
      }
      //如果有返回成功訊息
      return { code: 200, data: { checkUser } }
    },
  },
]
