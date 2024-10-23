import { create } from 'zustand';
import Cookies from 'js-cookie';

// UIStore 타입 정의
interface UIStore {
  settings: {
    theme: 'light' | 'dark';
    contrast: boolean;
    // brightness: number;
    // fontSize: number;
  };
  setSettings: (newSettings: Partial<UIStore['settings']>) => void;
  getTheme: () => string;
}

export const useUIStore = create<UIStore>((set, get) => ({
  settings: {
    theme: Cookies.get('theme') as 'light' | 'dark' || 'light', // 쿠키에서 테마를 가져옴
    contrast: Cookies.get('contrast') === 'true', // 쿠키에서 contrast 가져오기
    // brightness: Number(Cookies.get('brightness')) || 80, // 쿠키에서 brightness 가져오기
    // fontSize: Number(Cookies.get('fontSize')) || 16, // 쿠키에서 fontSize 가져오기
  },
  setSettings: (newSettings) => {
    set((state) => {
      // 새로운 설정 값을 상태에 반영
      const updatedSettings = { ...state.settings, ...newSettings };

      // 쿠키에 저장
      Cookies.set('theme', updatedSettings.theme);
      Cookies.set('contrast', String(updatedSettings.contrast));
      // Cookies.set('brightness', String(updatedSettings.brightness));
      // Cookies.set('fontSize', String(updatedSettings.fontSize));
      return { settings: updatedSettings };
    });
  },
  getTheme: () => get().settings.theme,
}));
