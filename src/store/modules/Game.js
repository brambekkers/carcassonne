

export default {
    state: {

    },
    getters: {

    },
    mutations: {
    },
    actions: {
        newGame({ dispatch, commit }) {
            // reset current game
            commit('board', [])

            // Create new game 
            dispatch('createTiles')
            dispatch('createBoard')

            // Start turn
            dispatch('setNextTile')
            dispatch('updateBoard')
        },
        nextTurn({ dispatch }) {
            console.log('next turn')
            // Change player

            // next Tile
            dispatch('setNextTile')
            dispatch('updateBoard')
        }
    }
};
