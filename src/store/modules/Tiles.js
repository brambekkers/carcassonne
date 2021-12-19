
import Tiles from '@/data/tiles.js'

export default {
    state: {
        tiles: [],
        tileSize: 200,
        newTile: {
            dir: 0,
        }
    },
    getters: {
        tiles: (s) => s.tiles,
        tileSize: (s) => s.tileSize,
        newTile: (s) => s.newTile
    },
    mutations: {
        tiles: (s, v) => s.tiles = v,
    },
    actions: {
        createTiles({ commit, getters }) {
            const newTile = getters.newTile
            const newTiles = []

            Tiles.forEach(tile => {
                for (let i = 0; i < tile.amount; i++) {
                    newTiles.push({ ...newTile, ...tile })
                }
            })

            commit('tiles', newTiles)
        }
    }
};
