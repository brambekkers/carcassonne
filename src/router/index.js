import { createRouter, createWebHistory } from "vue-router";

import Game from "@/views/Game.vue";
import Menu from "@/views/Menu.vue";
import CreatePlayers from "@/views/CreatePlayers.vue";


const routes = [
    {
        path: "/game",
        name: "Het spel",
        component: Game,
        meta: {
            sidepanel: true,
        }
    },
    {
        path: "/",
        name: "Hoofdmenu",
        component: Menu,
        meta: {
            sidepanel: false,
        }
    },
    {
        path: "/createplayers",
        name: "Maak spelers",
        component: CreatePlayers,
        meta: {
            sidepanel: false,
        }
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
