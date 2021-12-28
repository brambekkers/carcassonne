import _ from 'lodash'
import Tiles from '@/data/tiles.js'

export default {
    state: {
        // on Create
        tiles: [],
        tileSize: 200,
        tileGap: 4,
        newTile: {
            dir: 0,

            // Meeple
            meeplePos: { x: null, y: null },
            meepleOwner: null,
            meepleType: null
        },
        originalTiles: Tiles,
        // In game
        nextTile: null,
        lastTile: { x: null, y: null }
    },
    getters: {
        tiles: (s) => s.tiles,
        originalTiles: (s) => s.originalTiles,
        tileSize: (s) => s.tileSize,
        tileGap: (s) => s.tileGap,
        newTile: (s) => s.newTile,
        nextTile: (s) => s.nextTile,
        lastTile: (s) => s.lastTile
    },
    mutations: {
        tiles: (s, v) => s.tiles = v,
        nextTile: (s, v) => s.nextTile = v,
        lastTile: (s, v) => s.lastTile = v,
    },
    actions: {
        createTiles({ commit, state }) {
            const newTile = state.newTile
            const newTiles = []

            state.originalTiles.forEach(tile => {
                for (let i = 0; i < tile.amount; i++) {
                    newTiles.push({ ...newTile, ...tile })
                }
            })
            commit('tiles', newTiles)
        },
        setNextTile({ state, commit }) {
            if (state.tiles?.length && !state.nextTile) {
                commit('nextTile', state.tiles.splice(_.random(state.tiles.length - 1), 1)[0]);
            } else {
                // game stops...
            }
        },
        placeTile({ commit, getters, dispatch }, { x, y }) {
            const tile = _.cloneDeep(getters.nextTile)
            getters.board[y][x] = { ...getters.board[y][x], ...tile, neighbor: false, empty: false }
            commit('nextTile', null);
            commit('addLog', {
                action: 'Place Tile',
                msg: `${getters.currentPlayer?.name} placed a tile on x:${x}, y:${y}.`,
                player: getters.CPNum,
            });
            commit('lastTile', { x, y })
            commit('gameState', "meeple")

        },
        async rotateTile({ state, dispatch }, dir) {
            return new Promise(async (resolve) => {
                if (state.nextTile) {
                    // set new dir
                    state.nextTile.dir += dir
                    // rotate array
                    state.nextTile.format = _.cloneDeep(await dispatch('tranpose', { array: state.nextTile.format, dir }))

                    // Rotate all meepleSpots
                    for (const m of state.nextTile.meepleSpots) {
                        m.pos = await dispatch('rotateMeeplePos', { obj: m.pos, dir })
                    }

                    // Check for new spots
                    await dispatch('clearMatches')
                    await dispatch('setNeighborsMatches')
                }
                resolve()
            });
        },
        rotateMeeplePos({ }, { obj, dir }) {
            if (dir > 0) {
                return {
                    y: obj.x, x: (5 - obj.y - 1)
                }
            } else {
                return {
                    x: obj.y, y: (5 - obj.x - 1)
                }
            }
        },
        tranpose({ }, { array, dir }) {
            return new Promise((resolve) => {
                if (dir > 0) {
                    resolve(array[0].map((val, index) => array.map(row => row[index]).reverse()))
                } else {
                    // return array[array.length - 1].map((val, index) => array.map(row => row[index]))
                    resolve((array[0].map((column, index) => (array.map(row => row[index])))).reverse())

                }
            });

        }
    }
};
