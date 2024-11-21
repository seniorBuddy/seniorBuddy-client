// stores/uiStore.js
import { ModeStore } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const useModeStore = create<ModeStore>()(
    persist(
        (set) => ({
            mode: 'normal',
            toggleMode: () => set((state) => ({
                mode: state.mode === 'normal' ? 'simple' : 'normal'
            })),
            setMode: (mode) => set({mode})
        }),
        { name: 'mode'}
    ),
    
)

export default useModeStore;
