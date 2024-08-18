export interface LoginForm {
  username: string;
  password: string;
}



export interface LoginResponse{
  code: number,
  data: {
    token: string,
    message: string
  }
}
