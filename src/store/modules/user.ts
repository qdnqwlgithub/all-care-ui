import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginForm, LoginResponse } from "@/api/user/type";
import { login } from "@/api/user";

// 在 Setup Store 中：

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    async function doLogin(loginForm: LoginForm):Promise<LoginResponse> {
      return await login(loginForm);
    }
    return { token, doLogin };
  },
  {
    persist: true,
  },
);
