import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { router } from './app/app.route'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router);
app.mount('#app')
