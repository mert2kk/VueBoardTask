
import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import router from './router'

import './tailwind.css'

const app = createApp(App);
app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')