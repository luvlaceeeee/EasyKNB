import { create } from 'zustand';

type GlobalStore = {
  sidebarOpen: boolean;
};

type GlobalAction = {
  updateSidebarOpen: (sidebarOpen: boolean) => void;
};

export const useGlobalStore = create<GlobalStore & GlobalAction>((set) => ({
  sidebarOpen: false,
  updateSidebarOpen: (sidebarOpen) => set(() => ({ sidebarOpen })),
}));
