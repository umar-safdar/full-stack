import './bootstrap.js';
import { createApp } from 'vue';
import { createPinia } from "pinia";
import router from './routes.js';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const pinia =createPinia();
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app');
