

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



        }
    }
};
