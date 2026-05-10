import { defineStore } from 'pinia';

type DocsState = {
  pageTitle: string;
  loading: boolean;
};

export const useDocsStore = defineStore('docs', {
  state: (): DocsState => ({
    pageTitle: 'Docs',
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

