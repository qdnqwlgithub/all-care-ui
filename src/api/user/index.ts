import request from "@/utils/request";
import { LoginForm, LoginResponse, UserInfoResponse } from "./type";

enum Api {
  LOGIN_URL = "/admin/acl/index/login",
  USERINFO_URL = "/admin/acl/index/info",
  LOGOUT_URL = "/admin/acl/index/logout",
  GET_MENU_URL = "/admin/acl/index/menu",
}

export const login = (loginForm: LoginForm) =>
  request.post<any, LoginResponse>(Api.LOGIN_URL, loginForm);

export const reqUserInfo = () =>
  request.get<any, UserInfoResponse>(Api.USERINFO_URL);

export const logout = () => request.post<any, any>(Api.LOGOUT_URL);
