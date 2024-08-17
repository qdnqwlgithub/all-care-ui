import request from "@/utils/request";
import { LoginForm } from "./type";

enum Api {
  LOGIN_URL="/user/login",
  USERINFO_URL= "/user/info"
}

export const login=(loginForm:LoginForm)=>request.post(Api.LOGIN_URL,loginForm)

export const info=()=>request.get(Api.LOGIN_URL)
