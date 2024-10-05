import { create } from "zustand";
import { uiItem } from "@/types";

export const useUIStore = create((set) => ({
    settings: {
        font: 16,
        theme: 'light',
        contrast: false,
        brightness: 80,
    },
    // UI 설정하기
    setSettings: (newSettings: uiItem) => set((state) => ({
        setting: {...state.settings, ...newSettings}
    })),
    // UI 불러오기
    loadSetting: () => {
        const savedSettings = localStorage.getItem('uiSetting');
        if(!savedSettings) {
            set({ settings: JSON.parse(savedSettings)})
        }
    },
    s
   
}))
