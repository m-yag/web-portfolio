import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import VueSideBarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(VueSideBarMenu)
app.mount('#app')
