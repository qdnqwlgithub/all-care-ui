import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("@/views/login.vue"),
      name: "login",
    },
    {
      path: "/",
      component: () => import("@/views/index.vue"),
      name: "index",
    },
    {
      path: "/404",
      component: () => import("@/views/404.vue"),
      name: "404",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
      name: "any",
    },
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
