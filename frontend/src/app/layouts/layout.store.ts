import { defineStore } from 'pinia';

type LayoutState = {
  sidebarOpen: boolean;
};

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => ({
    sidebarOpen: true,
  }),

  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    setSidebarOpen(value: boolean) {
      this.sidebarOpen = value;
    },
  },
});

