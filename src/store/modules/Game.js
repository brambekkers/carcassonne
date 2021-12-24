

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
            await dispatch('updateBoard')
            return true
        },
        async nextTurn({ dispatch, getters, commit }) {
            // Change player
            commit('nextPlayer')
            commit('addLog', {
                action: 'Next player',
                msg: `Its ${getters.currentPlayer?.name}'s turn!`,
                player: getters.CPNum,
            });

            // next Tile
            if (getters.tiles.length) {
                await dispatch('setNextTile')
                await dispatch('updateBoard')
            } else {
                alert('SPEL AFGELOPEN')
            }

            return true
        }
    }
};
