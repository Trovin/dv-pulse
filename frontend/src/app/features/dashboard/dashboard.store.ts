import { defineStore } from 'pinia';

type DashboardState = {
  sidebarOpen: boolean;
  pageTitle: string;
  loading: boolean;
};

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({
    sidebarOpen: true,
    pageTitle: 'Dashboard',
    loading: false,
  }),

  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    setPageTitle(title: string) {
      this.pageTitle = title;
    },

    setLoading(value: boolean) {
      this.loading = value;
    },
  },
});
