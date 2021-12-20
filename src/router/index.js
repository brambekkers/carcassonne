import { createRouter, createWebHistory } from "vue-router";

import Game from "@/views/Game.vue";
import Menu from "@/views/Menu.vue";


const routes = [
    {
        path: "/",
        name: "Het spel",
        component: Game,
        meta: {
            description: "",
            navbar: true,
            requiresAuth: true,
            pageDetails: true,
            sidebar: true,

        }
    },
    {
        path: "/menu",
        name: "Hoofdmenu",
        component: Menu,
        meta: {
            description: "",
            navbar: true,
            requiresAuth: true,
            pageDetails: true,
            sidebar: true,

        }
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
