import { defineStore } from 'pinia';

type IntegrationState = {
  pageTitle: string;
  loading: boolean;
};

export const useIntegrationStore = defineStore('integration', {
  state: (): IntegrationState => ({
    pageTitle: 'AI Integration',
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

