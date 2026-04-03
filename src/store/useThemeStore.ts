import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import { Colors, Spacing, ThemePalette } from '../constants/theme';

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
  
  // Computed values
  getColors: () => ThemePalette;
  getSpacing: () => typeof Spacing;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: AppThemeType.material,
      brightnessValue: AppBrightnessType.followSystem,
      markdown: AppMarkdownType.flutter,
      locale: null,
      setTheme: (theme) => set({ theme }),
      setBrightness: (brightnessValue) => set({ brightnessValue }),
      setMarkdown: (markdown) => set({ markdown }),
      setLocale: (locale) => set({ locale }),

      getColors: () => {
        const { brightnessValue } = get();
        const systemScheme = Appearance.getColorScheme();
        
        if (brightnessValue === AppBrightnessType.dark || 
           (brightnessValue === AppBrightnessType.followSystem && systemScheme === 'dark')) {
          return Colors.dark;
        }
        return Colors.light;
      },
      
      getSpacing: () => Spacing,
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
