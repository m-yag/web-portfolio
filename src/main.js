import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'particles.vue3'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/js/all'


// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(VueClipboard)
app.mount('#app')
