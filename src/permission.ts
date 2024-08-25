import router from "@/router";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useUserStore } from "@/store/modules/user";

router.beforeEach(async (to, from, next) => {
  nprogress.start();
  document.title = `${to.meta.title}-all care`;
  if (to.meta.noToken) {
    next();
    return;
  }
  let userStore = useUserStore();
  if (userStore.token) {
    if (userStore.userInfo) {
      next();
    } else {
      try {
        await userStore.getUserInfo();
        next();
      } catch (e) {
        userStore.doLogout();
        goToLoginPage(next, to);
      }
    }
  } else {
    goToLoginPage(next, to);
  }
});

router.afterEach((to, from) => {
  nprogress.done();
});

function goToLoginPage(next, to) {
  next({ path: "/login", query: { redirect: to.path } });
}
