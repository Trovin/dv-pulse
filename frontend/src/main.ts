import './styles.scss';
import { createApp } from 'vue';
import App from './app/App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import 'primeicons/primeicons.css';


createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount('#root');
