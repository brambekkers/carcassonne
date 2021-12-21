import { createStore } from "vuex";
import Game from "./modules/Game";
import Debug from "./modules/Debug";
import Board from "./modules/Board";
import Tiles from "./modules/Tiles";
import Players from "./modules/Players";
export default createStore({ modules: { Game, Board, Tiles, Debug, Players } });
