import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: number;
  isAdmin: boolean;
  username: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
    }),
    { name: 'auth' },
  ),
);

export const useIsLoggedIn = () => {
  return useAuthStore((state) => Boolean(state.user));
};
