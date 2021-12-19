
import _ from 'lodash'

export default {
    state: {
        board: [],
        boardSize: { x: 5, y: 5 }
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
            commit('board', [])
            const newBoard = []
            for (let y = 0; y < state.boardSize.y; y++) {
                if (!newBoard[y]) newBoard.push([])
                for (let x = 0; x < state.boardSize.x; x++) {
                    newBoard[y].push(null)
                }
            }
            commit('board', newBoard)
        },
        placeStartTile({ state, getters }) {
            const startTile = _.cloneDeep(getters.tiles.find(t => t.startTile))
            const x = Math.floor(getters.boardSize.x / 2)
            const y = Math.floor(getters.boardSize.y / 2)
            state.board[y][x] = startTile
        }
    }
};
