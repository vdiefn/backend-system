export const constantRouter = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "layout",
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMAtch(.*)*",
    redirect: "/404",
    name: "any",
  },
]
