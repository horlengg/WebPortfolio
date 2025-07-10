import { createApp } from 'vue'
import App from './App.vue'
import "./app/styles/index.scss"
// import 'highlight.js/styles/stackoverflow-light.css';
import router from "./app/route.config"

// if(true){

// }



const app = createApp(App)
app.use(router);
app.mount('#app')
