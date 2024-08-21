import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/acl",
    component: () => import("@/views/layout/index.vue"),
    meta: {
      title: "权限管理",
    },
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/acl/user/index.vue"),
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "/acl/permission",
        component: () => import("@/views/acl/permission/index.vue"),
        meta: {
          title: "菜单管理",
        },
      },
      {
        path: "/acl/role",
        component: () => import("@/views/acl/role/index.vue"),
        meta: {
          title: "角色管理",
        },
      },
    ],
  },
  {
    path: "/product",
    component: () => import("@/views/layout/index.vue"),
    meta: {
      title: "商品管理",
    },
    children: [
      {
        path: "/product/trademark",
        component: () => import("@/views/trademark/index.vue"),
        name: "trademark",
        meta: {
          title: "品牌管理",
        },
      },
      {
        path: "/product/attr",
        component: () => import("@/views/attr/index.vue"),
        name: "trademark",
        meta: {
          title: "属性管理",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    name: "login",
    meta: {
      title: "登陆",
    },
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
      hidden: true,
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
