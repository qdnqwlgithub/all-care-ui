import { R } from "@/api/user/index";

export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginResponse extends R {
  data: Object;
}

// export interface LoginResponse extends R {
//   data: string
// }

export interface UserInfoResponse extends R {
  data: {
    routes: string[];
    buttons: string[];
    roles: string[];
    name: string;
    avatar: string;
  };
}

export interface LogoutResponse extends R {
  data: null;
}
