import { setCookie } from "cookies-next";

export const setTokenInCookies = (accessToken: string, refreshToken: string) => {
  setCookie('access_token', accessToken, { secure: true, path: '/' });
  setCookie('refresh_token', refreshToken, { secure: true, path: '/' });
};