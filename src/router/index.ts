import { createRouter, createWebHistory } from "vue-router"
import { constantRouter } from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
})

export default router
