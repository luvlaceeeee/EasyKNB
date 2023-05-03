import { create } from 'zustand';

type BoardStore = {
  title: string | null;
};

type BoardAction = {
  updateTitle: (title: string) => void;
};

export const useGlobalStore = create<BoardStore & BoardAction>((set) => ({
  title: null,
  updateTitle: (title) => set(() => ({ title })),
}));
