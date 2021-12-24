
import _ from 'lodash'

export default {
    state: {
        board: [],
        boardSize: { x: 20, y: 20 },
        neighbors: [],
        matchSpots: [],
    },
    getters: {
        board: (s) => s.board,
        boardSize: (s) => s.boardSize,
        neighbors: (s) => s.neighbors,
        matchSpots: (s) => s.matchSpots,
    },
    mutations: {
        board: (s, v) => s.board = v,
        neighbors: (s, v) => s.neighbors = v,
        matchSpots: (s, v) => s.matchSpots = v,
    },
    actions: {
        async createBoard({ dispatch }) {
            await dispatch('create2DArray')
            await dispatch('placeStartTile')

        },
        async updateBoard({ state, dispatch, commit }) {
            // Set new neighbors
            const neighbors = await dispatch('findEmptyNeighbors')
            commit('neighbors', neighbors)
            await dispatch('setEmptyNeighbors', neighbors)

            // Find match spots
            await dispatch('clearMatchspots')
            await dispatch('findMatchspots')
            if (!state.matchSpots.length) {
                console.log('no match spots found')
            }
            return true
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
                        match: false,
                        y,
                        x,
                    })
                }
            }
            commit('board', newBoard)
        },
        clearMatchspots({ state, commit }) {
            state.neighbors.forEach(n => n.match = false)
            commit('matchSpots', [])
        },
        async findMatchspots({ state, getters, dispatch }) {
            for (const n of state.neighbors) {
                const nt = getters.nextTile
                let match = true
                const [top, right, bottom, left] = await dispatch('findNeighborsOfCell', { x: n.x, y: n.y })
                if (!top.empty) {
                    if (
                        nt.format[0][1] != top.format[4][1] ||
                        nt.format[0][2] != top.format[4][2] ||
                        nt.format[0][3] != top.format[4][3]) {
                        match = false
                    }
                }
                if (!right.empty) {
                    if (
                        nt.format[1][4] != right.format[1][0] ||
                        nt.format[2][4] != right.format[2][0] ||
                        nt.format[3][4] != right.format[3][0]) {
                        match = false
                    }
                }
                if (!bottom.empty) {
                    if (
                        nt.format[4][1] != bottom.format[0][1] ||
                        nt.format[4][2] != bottom.format[0][2] ||
                        nt.format[4][3] != bottom.format[0][3]) {
                        match = false
                    }
                }
                if (!left.empty) {
                    if (
                        nt.format[1][0] != left.format[1][4] ||
                        nt.format[2][0] != left.format[2][4] ||
                        nt.format[3][0] != left.format[3][4]) {
                        match = false
                    }
                }
                // Set neighbor match
                if (match) {
                    n.match = match
                    state.matchSpots.push(n)
                }

            }

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
                        const allNeighbors = await dispatch('findNeighborsOfCell', { x: cell.x, y: cell.y })
                        const emptyNeighbors = allNeighbors.filter(n => n.empty)
                        neighbors.push(emptyNeighbors)
                    }
                }
            }
            // Flat array
            return neighbors.flat()

        },
        async setEmptyNeighbors({ state, commit }, neighbors) {
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
