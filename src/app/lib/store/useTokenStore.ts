import Cookies from 'js-cookie';
import { create } from 'zustand';

// 토큰을 쿠키에서 가져오는 함수
const getToken = (): string | null => {
  return Cookies.get('access_token') || null;
};

interface useTokenStore {
  token: string | null;
  getToken: () => string | null;
  setToken: (access_token: string) => void;
  setRefreshToken: (refresh_token: string) => void;
  removeToken: () => void;
}

const useTokenStore = create<useTokenStore>((set) => ({
  token: getToken(),

  // 쿠키에서 액세스 토큰을 가져오는 함수
  getToken: () => {
    return Cookies.get('access_token') || null;
  },

  // 액세스 토큰 설정 및 쿠키에 저장
  setToken: (access_token: string) => {
    set(() => ({ token: access_token }));
    Cookies.set('access_token', access_token);
  },

  // 리프레시 토큰 설정 및 쿠키에 저장
  setRefreshToken: (refresh_token: string) => {
    Cookies.set('refresh_token', refresh_token);
  },

  // 액세스 및 리프레시 토큰 제거
  removeToken: () => {
    set(() => ({ token: null }));
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
  },
}));

export default useTokenStore;
