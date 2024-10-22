import Cookies from 'js-cookie';
import { create } from 'zustand';

// 토큰을 쿠키에서 가져오는 함수
const getToken = (): string | null => {
    return Cookies.get('access_token') || null; 
};


interface useTokenStore {
    token: string | null,
    setToken: (token: string) => void;
    removeToken: () => void;
}

const useTokenStore = create<useTokenStore>((set) => ({
  token: getToken(),
  
  // 토큰 설정 및 쿠키에 저장
  setToken: (token) => {
    set(() => ({ token: token }));
    },
  // 토큰 제거 및 쿠키 삭제
  removeToken: () => {
    set(() => ({ token: null }));
  }
}));

export default useTokenStore;
