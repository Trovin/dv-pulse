import { defineStore } from 'pinia';

type DashboardState = {
  pageTitle: string;
  loading: boolean;
};

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({
    pageTitle: 'Dashboard %^&№',
    loading: false,
  }),

  actions: {
    setPageTitle(title: string) {
      this.pageTitle = title;
    },

    setLoading(value: boolean) {
      this.loading = value;
    },
  },
});
