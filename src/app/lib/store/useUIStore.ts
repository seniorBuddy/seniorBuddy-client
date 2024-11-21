import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const DEFAULT_FONT_SIZE = 16;

interface FontStoreState {
  fontSize: number;
  setFontSize: (size: number) => void;
  resetFontSize: () => void;
}

const useFontStore = create<FontStoreState>() (
  persist(
    (set) => ({
      fontSize: DEFAULT_FONT_SIZE,
      setFontSize: (size) => {
        document.documentElement.style.fontSize = `${size}px`;
        set({ fontSize: size });
      },
      resetFontSize: () => {
        document.documentElement.style.fontSize = `${DEFAULT_FONT_SIZE}px`;
        set({ fontSize: DEFAULT_FONT_SIZE });
      },
    }),
    {
      name: 'font-settings', // 저장할 키 이름
      onRehydrateStorage: () => (state) => {
        if (state?.fontSize) {
          document.documentElement.style.fontSize = `${state.fontSize}px`;
        }
      },
    }
  )
);

export default useFontStore;
