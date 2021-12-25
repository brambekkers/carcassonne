
import _ from 'lodash'

export default {
    state: {
        board: [],
        boardSize: { x: 20, y: 20 },
        neighbors: [],
        allMatchSpots: [],
    },
    getters: {
        board: (s) => s.board,
        boardSize: (s) => s.boardSize,
        neighbors: (s) => s.neighbors,
        allMatchSpots: (s) => s.allMatchSpots,
        matchSpots: (s, g) => s.allMatchSpots.filter(m => m.dir === (g.nextTile.dir % 360)).map(m => m.neighbor),
    },
    mutations: {
        board: (s, v) => s.board = v,
        neighbors: (s, v) => s.neighbors = v,
        allMatchSpots: (s, v) => s.allMatchSpots = v,
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
            await dispatch('clearMatches')
            commit('allMatchSpots', [])
            await dispatch('findAllMatches')
            await dispatch('setNeighborsMatches')
            if (!state.allMatchSpots.length) {
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
        clearMatches({ state, commit }) {
            state.neighbors.forEach(n => n.match = false)
        },
        async setNeighborsMatches({ commit, getters }) {
            for (const m of getters.matchSpots) {
                m.match = true
            }
        },
        async findAllMatches({ state, getters, dispatch }) {
            // Check all neighbors for potential matches
            for (const n of state.neighbors) {
                // Check all sides
                const [top, right, bottom, left] = await dispatch('findNeighborsOfCell', { x: n.x, y: n.y })

                // Rotate the array
                const positions = [0, 1, 2, 3]
                for (const pos of positions) {
                    let match = true
                    let array = _.cloneDeep(getters.nextTile.format)
                    for (let i = 0; i < pos; i++) {
                        array = await dispatch('tranpose', { array, dir: 90 })
                    }

                    if (!top.empty) {
                        const topMatch = await dispatch('checkMatch', { centerArray: array, checkArray: top.format, side: 'top' })
                        if (!topMatch) match = false
                    }
                    if (!right.empty) {
                        const rightMatch = await dispatch('checkMatch', { centerArray: array, checkArray: right.format, side: 'right' })
                        if (!rightMatch) match = false
                    }
                    if (!bottom.empty) {
                        const bottomMatch = await dispatch('checkMatch', { centerArray: array, checkArray: bottom.format, side: 'bottom' })
                        if (!bottomMatch) match = false
                    }
                    if (!left.empty) {
                        const leftMatch = await dispatch('checkMatch', { centerArray: array, checkArray: left.format, side: 'left' })
                        if (!leftMatch) match = false
                    }
                    // Set neighbor match
                    if (match) {
                        const allreadyInArray = state.allMatchSpots.find(m => m.neighbor.x === n.x && m.neighbor.y === n.y && m.dir === (pos * 90))
                        if (!allreadyInArray) {
                            state.allMatchSpots.push({
                                neighbor: n,
                                dir: pos * 90
                            })
                        }
                    }
                }
            }
        },
        async checkMatch({ }, { side, centerArray, checkArray }) {
            let match = true
            if (side === 'top') {
                if (
                    centerArray[0][1] != checkArray[4][1] ||
                    centerArray[0][2] != checkArray[4][2] ||
                    centerArray[0][3] != checkArray[4][3]) {
                    match = false
                }
            }
            if (side === 'right') {
                if (
                    centerArray[1][4] != checkArray[1][0] ||
                    centerArray[2][4] != checkArray[2][0] ||
                    centerArray[3][4] != checkArray[3][0]) {
                    match = false
                }
            }
            if (side === 'bottom') {
                if (
                    centerArray[4][1] != checkArray[0][1] ||
                    centerArray[4][2] != checkArray[0][2] ||
                    centerArray[4][3] != checkArray[0][3]) {
                    match = false
                }
            }
            if (side === 'left') {
                if (
                    centerArray[1][0] != checkArray[1][4] ||
                    centerArray[2][0] != checkArray[2][4] ||
                    centerArray[3][0] != checkArray[3][4]) {
                    match = false
                }
            }
            return match
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
