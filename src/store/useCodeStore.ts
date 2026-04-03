import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CodeState {
  theme: string;
  themeDark: string;
  fontSize: number;
  fontFamily: string;
  setTheme: (theme: string) => void;
  setThemeDark: (themeDark: string) => void;
  setFontSize: (fontSize: number) => void;
  setFontFamily: (fontFamily: string) => void;
}

export const useCodeStore = create<CodeState>()(
  persist(
    (set) => ({
      theme: 'vs',
      themeDark: 'vs2015',
      fontSize: 14,
      fontFamily: 'JetBrains Mono',
      setTheme: (theme) => set({ theme }),
      setThemeDark: (themeDark) => set({ themeDark }),
      setFontSize: (fontSize) => set({ fontSize }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
    }),
    {
      name: 'code-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
