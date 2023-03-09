import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify';
import Tabs from 'vue3-tabs';
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import './assets/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App)

app.use(createPinia()).use(Vue3Toastify).use(Tabs).use(vuetify)

app.mount('#app')
