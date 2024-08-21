import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginForm, LoginResponse } from "@/api/user/type";
import { login } from "@/api/user";
import { routes } from "@/router";
// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

export const useSettingStore = defineStore(
  "setting",
  () => {
    let collapse = ref(true);
    return { collapse };
  },
  {
    persist: true,
  },
);
