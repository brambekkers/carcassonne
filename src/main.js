import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import { dragscrollNext } from "vue-dragscroll";
// Import Font Awesome
import "@/assets/fonts/fa/all.min.css";

// Main styling
import "@/scss/main.scss";


import App from './App.vue'
createApp(App).use(router).use(store).directive('dragscroll', dragscrollNext).mount('#app')