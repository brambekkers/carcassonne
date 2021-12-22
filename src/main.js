import { createApp } from 'vue'
import router from "./router";
import store from "./store";
// Import Font Awesome
import "@/assets/fonts/fa/all.min.css";

// Main styling
import "@/scss/main.scss";
import 'animate.css';


import App from './App.vue'
createApp(App).use(router).use(store).mount('#app')