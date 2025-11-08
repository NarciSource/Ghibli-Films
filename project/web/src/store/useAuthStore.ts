import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  accessToken: string | null;
  updateAccessToken: (accessToken: string | null) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      updateAccessToken: (accessToken: string | null) => set({ accessToken }),
    }),
    { name: 'auth' },
  ),
);

export const useIsLoggedIn = () => {
  return useAuthStore((state) => Boolean(state.accessToken));
};
