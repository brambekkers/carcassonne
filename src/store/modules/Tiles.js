import _ from 'lodash'
import Tiles from '@/data/tiles.js'

export default {
    state: {
        // on Create
        tiles: [],
        tileSize: 200,
        newTile: {
            dir: 0,
        },

        // In game
        nextTile: null
    },
    getters: {
        tiles: (s) => s.tiles,
        tileSize: (s) => s.tileSize,
        newTile: (s) => s.newTile,
        nextTile: (s) => s.nextTile
    },
    mutations: {
        tiles: (s, v) => s.tiles = v,
        nextTile: (s, v) => s.nextTile = v,
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
        },
        setNextTile({ state, commit }) {
            console.log('ik draai')
            if (state.tiles?.length) {
                commit('nextTile', state.tiles.splice(Math.floor(Math.random() * state.tiles.length), 1)[0]);
                console.log(state.nextTile)
            } else {
                // game stops...
            }
        },
        placeTile({ commit, getters, dispatch }, { x, y }) {
            getters.board[y][x] = _.cloneDeep(getters.nextTile)

            commit('nextTile', null);
            dispatch('setNextTile')

        }
    }
};
