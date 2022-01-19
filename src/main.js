import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.css";
import "@/assets/details.css";
import "@/assets/death.css";
// import "@/assets/normalize.css";

//createApp using  router(import from router) and mount #app
createApp(App).use(router).mount('#app')
