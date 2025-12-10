import { create } from 'zustand';

export type Cut = {
  id: number;
  src: string;
};

type CutsState = {
  cuts: Cut[];
  setCuts: (cuts: Cut[]) => void;
};

export const useCutsStore = create<CutsState>((set) => ({
  cuts: [],
  setCuts: (cuts: Cut[]) => set({ cuts }),
}));
