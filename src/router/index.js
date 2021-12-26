import { createRouter, createWebHistory } from "vue-router";

import Game from "@/views/Game.vue";
import Menu from "@/views/Menu.vue";
import CreatePlayers from "@/views/CreatePlayers.vue";

// Options
import Options from "@/views/Options.vue";
import TileAmount from "@/views/options/TileAmount.vue";


const routes = [
    {
        path: "/game",
        name: "The Game",
        component: Game,
        meta: {
            sidepanel: true,
        }
    },
    {
        path: "/",
        name: "Main Menu",
        component: Menu,
        meta: {
            sidepanel: false,
        }
    },
    {
        path: "/createplayers",
        name: "Create Players",
        component: CreatePlayers,
        meta: {
            sidepanel: false,
        }
    },
    // Options
    {
        path: "/options",
        name: "Options",
        component: Options,
        meta: {
            sidepanel: false,
        }
    },
    {
        path: "/options/tileamount",
        name: "Tile Amount",
        component: TileAmount,
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
