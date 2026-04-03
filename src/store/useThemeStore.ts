import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AppThemeType {
  material = 0,
  cupertino = 1,
}

export enum AppBrightnessType {
  followSystem = 0,
  light = 1,
  dark = 2,
}

export enum AppMarkdownType {
  flutter = 0,
  webview = 1,
}

interface ThemeState {
  theme: AppThemeType;
  brightnessValue: AppBrightnessType;
  markdown: AppMarkdownType;
  locale: string | null;
  setTheme: (theme: AppThemeType) => void;
  setBrightness: (brightness: AppBrightnessType) => void;
  setMarkdown: (markdown: AppMarkdownType) => void;
  setLocale: (locale: string | null) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: AppThemeType.material,
      brightnessValue: AppBrightnessType.followSystem,
      markdown: AppMarkdownType.flutter,
      locale: null,
      setTheme: (theme) => set({ theme }),
      setBrightness: (brightnessValue) => set({ brightnessValue }),
      setMarkdown: (markdown) => set({ markdown }),
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
