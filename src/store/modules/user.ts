import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { LoginForm, LoginResponse, UserInfoResponse } from "@/api/user/type";
import { login, reqUserInfo } from "@/api/user";
import { routes } from "@/router";
// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

export const useUserStore = defineStore(
  "user",
  () => {
    let token = ref<string | undefined>(undefined);
    let userInfo = ref<object | undefined>(undefined);
    let menus = routes;

    async function doLogin(loginForm: LoginForm) {
      let { code, data, message, ok } = await login(loginForm);
      if (code == 200) {
        token.value = data as string;
        return Promise.resolve();
      }
      return Promise.reject();
    }
    const getUserInfo = async () => {
      let { data } = await reqUserInfo();
      userInfo.value = data;
    };

    function doLogout() {
      token.value = undefined;
      userInfo.value = undefined;
    }

    return { token, doLogin, menus, userInfo, getUserInfo, doLogout };
  },
  {
    persist: true,
  },
);
