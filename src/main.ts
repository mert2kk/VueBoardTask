import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import ToastService from 'primevue/toastservice';

import PrimeVue from 'primevue/config';

import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import router from './router'

import './tailwind.css'

const app = createApp(App);
app.use(store)
app.use(router)
app.use(ToastService);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});

app.mount('#app')