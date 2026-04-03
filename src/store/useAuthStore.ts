import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Account } from '../models/account';

interface AuthState {
  accounts: Account[];
  activeAccountIndex: number | null;
  loading: boolean;
  addAccount: (account: Account) => Promise<void>;
  removeAccount: (index: number) => Promise<void>;
  setActiveAccount: (index: number) => Promise<void>;
  setLoading: (loading: boolean) => void;
  // Get active account helper
  activeAccount: () => Account | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accounts: [],
      activeAccountIndex: null,
      loading: false,

      addAccount: async (account) => {
        set((state) => ({
          accounts: [...state.accounts, account],
          activeAccountIndex: state.accounts.length, // Set the added account as active
        }));
      },

      removeAccount: async (index) => {
        set((state) => {
          const newAccounts = state.accounts.filter((_, i) => i !== index);
          let newIndex = state.activeAccountIndex;
          if (newIndex === index) {
            newIndex = null;
          } else if (newIndex !== null && newIndex > index) {
            newIndex -= 1;
          }
          return {
            accounts: newAccounts,
            activeAccountIndex: newIndex,
          };
        });
      },

      setActiveAccount: async (index) => {
        set({ activeAccountIndex: index });
      },

      setLoading: (loading) => set({ loading }),

      activeAccount: () => {
        const { accounts, activeAccountIndex } = get();
        if (activeAccountIndex === null || accounts.length === 0) return null;
        return accounts[activeAccountIndex];
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
