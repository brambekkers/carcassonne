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
            if (state.tiles?.length) {
                commit('nextTile', state.tiles.splice(Math.floor(Math.random() * state.tiles.length), 1)[0]);
            } else {
                // game stops...
            }
        },
        placeTile({ commit, getters, dispatch }, { x, y }) {
            getters.board[y][x] = _.cloneDeep(getters.nextTile)

            commit('nextTile', null);
            dispatch('setNextTile')

        },
        async rotateTile({ state, dispatch }, dir) {
            // set new dir
            let newValue = state.nextTile.dir + dir
            if (newValue === -360) newValue = 0
            state.nextTile.dir = (newValue % 360)
            // rotate array
            state.nextTile.format = _.cloneDeep(await dispatch('tranpose', { array: state.nextTile.format, dir }))


        },
        tranpose({ }, { array, dir }) {
            console.log(dir)
            if (dir > 0) {
                return array[0].map((val, index) => array.map(row => row[index]).reverse())
            } else {
                // return array[array.length - 1].map((val, index) => array.map(row => row[index]))
                return (array[0].map((column, index) => (array.map(row => row[index])))).reverse()

            }
        }
    }
};
