

export default {
    state: {

    },
    getters: {

    },
    mutations: {
    },
    actions: {
        async newGame({ dispatch, commit }) {
            // reset current game
            commit('board', [])

            // Create new game 
            await dispatch('createTiles')
            await dispatch('createBoard')

            // Start turn
            await dispatch('setNextTile')
            dispatch('updateBoard')
        },
        nextTurn({ dispatch, getters }) {
            console.log('next turn')
            // Change player

            // next Tile
            if (getters.tiles.length) {
                dispatch('setNextTile')
                dispatch('updateBoard')
            } else {
                alert('SPEL AFGELOPEN')
            }
        }
    }
};
