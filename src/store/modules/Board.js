
import _ from 'lodash'

export default {
    state: {
        board: [],
        boardSize: { x: 20, y: 20 }
    },
    getters: {
        board: (s) => s.board,
        boardSize: (s) => s.boardSize,

    },
    mutations: {
        board: (s, v) => s.board = v,

    },
    actions: {
        createBoard({ dispatch }) {
            dispatch('create2DArray')
            dispatch('placeStartTile')
        },
        async updateBoard({ dispatch }) {
            // clear neighbors

            // find new neighbors
            const neighbors = await dispatch('findEmptyNeighbors')
            dispatch('setEmptyNeighbors', neighbors)
        },
        create2DArray({ state, commit }) {
            commit('board', [])
            const newBoard = []
            for (let y = 0; y < state.boardSize.y; y++) {
                if (!newBoard[y]) newBoard.push([])
                for (let x = 0; x < state.boardSize.x; x++) {
                    newBoard[y].push({
                        neighbor: false,
                        empty: true,
                        y,
                        x,
                    })
                }
            }
            commit('board', newBoard)
        },
        placeStartTile({ state, getters }) {
            const startTile = _.cloneDeep(getters.tiles.find(t => t.startTile))
            const x = Math.floor(getters.boardSize.x / 2)
            const y = Math.floor(getters.boardSize.y / 2)
            state.board[y][x] = { ...state.board[y][x], ...startTile, empty: false, }
        },
        async findEmptyNeighbors({ state, dispatch }) {
            const neighbors = []
            for (const row of state.board) {
                for (const cell of row) {
                    if (!cell.empty) {
                        neighbors.push(await dispatch('findNeighborsOfCell', { x: cell.x, y: cell.y }))
                    }
                }
            }
            // Flat array
            return neighbors.flat()

        },
        async setEmptyNeighbors({ state }, neighbors) {
            for (const n of neighbors) {
                state.board[n.y][n.x].neighbor = true
            }
        },
        findNeighborsOfCell({ state }, { x, y }) {
            var result = [];
            const options = [
                { x: 0, y: -1 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
                { x: -1, y: 0 },

            ];
            options.forEach(option => {
                if (state.board[y + option.y] && state.board[y + option.y][x + option.x]) {
                    result.push(state.board[y + option.y][x + option.x])
                }
            })

            return result;
        }
    }
};
