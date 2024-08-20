import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    name: "login",
    meta: {
      title: "登陆",
    },
  },
  {
    path: "/",
    component: () => import("@/views/layout/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
    },
    children: [
      {
        path: "/acl",
        component: () => import("@/views/index.vue"),
        meta: {
          title: "权限管理",
        },
        children: [
          {
            path: "/acl/user",
            component: () => import("@/views/acl/user.vue"),
            meta: {
              title: "用户管理",
            },
          },
          {
            path: "/acl/permission",
            component: () => import("@/views/acl/permission.vue"),
            meta: {
              title: "菜单管理",
            },
          },
          {
            path: "/acl/role",
            component: () => import("@/views/acl/role.vue"),
            meta: {
              title: "角色管理",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    name: "404",
    meta: {
      title: "404",
    },
  },
  {
    path: "/screen",
    component: () => import("@/views/screen.vue"),
    name: "screen",
    meta: {
      title: "大屏",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any",
    meta: {
      hideen: true,
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
