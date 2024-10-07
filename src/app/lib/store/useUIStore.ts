import { create } from "zustand";
import { persist } from "zustand/middleware";

// UIStore 타입 정의
interface UIStore {
  settings: {
    theme: 'light' | 'dark';
    contrast: boolean;
    brightness: number;
    fontSize: number;
  };
  setSettings: (newSettings: Partial<UIStore['settings']>) => void;
  getTheme: () => string;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set, get) => ({
      settings: {
        theme: 'light',
        contrast: false,
        brightness: 80,
        fontSize: 16,
      },
      setSettings: (newSettings) => set((state) => ({
        settings: { ...state.settings, ...newSettings }
      })),
      getTheme: () => get().settings.theme,
    }),
    {
      name: 'ui-settings',
    }
  )
);
