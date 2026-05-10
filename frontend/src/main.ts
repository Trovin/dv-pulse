import './styles.scss';
import { createApp } from 'vue';
import App from './app/App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { router } from './router';
import 'primeicons/primeicons.css';
import { createPinia } from 'pinia';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount('#root');
