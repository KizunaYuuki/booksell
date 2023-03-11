// import { createApp } from 'vue'
// import App from './App.vue'

// import './assets/main.css' // Áp dụng css mặc định
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import "@fortawesome/fontawesome-free/css/all.min.css";

// createApp(App).mount('#app')



import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css' // Áp dụng css mặc định
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Plugins
import { registerPlugins } from '@/plugins'
const app = createApp(App)

registerPlugins(app)


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')