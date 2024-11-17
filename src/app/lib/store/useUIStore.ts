import { create } from 'zustand';
import Cookies from 'js-cookie';
import { UIStore } from '@/types';


export const useUIStore = create<UIStore>((set, get) => ({
  settings: {
    contrast: Cookies.get('contrast') === 'true', // 쿠키에서 contrast 가져오기
    brightness: Number(Cookies.get('brightness')) || 80, // 쿠키에서 brightness 가져오기
    fontSize: Number(Cookies.get('fontSize')) || 16, // 쿠키에서 fontSize 가져오기
  },
  setSettings: (newSettings) => {
    set((state) => {
      // 새로운 설정 값을 상태에 반영
      const updatedSettings = { ...state.settings, ...newSettings };

      // 쿠키에 저장
      Cookies.set('contrast', String(updatedSettings.contrast));
      Cookies.set('brightness', String(updatedSettings.brightness));
      Cookies.set('fontSize', String(updatedSettings.fontSize));
      return { settings: updatedSettings };
    });
  },
}));
