

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
        create2DArray({ state, commit }) {
            commit('board', new Array(state.boardSize.y).fill(new Array(state.boardSize.x).fill(null)))
            console.table(state.board)
        },
        placeStartTile({ state, getters }) {
            const startTile = { ...getters.tiles.find(t => t.startTile) }
            const x = Math.round(getters.boardSize.x / 2)
            const y = Math.round(getters.boardSize.y / 2)
            state.board[y][x] = startTile
        }
    }
};
