import { setCookie } from "cookies-next";

export const setTokenInCookies = (accessToken: string, refreshToken: string) => {
  setCookie('access_token', accessToken, { maxAge: 60 * 60 * 24, secure: true, path: '/' });
  setCookie('refresh_token', refreshToken, { maxAge: 60 * 60 * 24, secure: true, path: '/' });
};