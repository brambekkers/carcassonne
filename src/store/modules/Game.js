

export default {
    state: {

    },
    getters: {

    },
    mutations: {
    },
    actions: {
        async newGame({ getters, dispatch, commit }) {
            // reset current game
            commit('board', [])

            // Create new game 
            await dispatch('createTiles')
            await dispatch('createBoard')
            await dispatch('setNextTile')
            await dispatch('updateBoard')

            // Start turn
            if (getters.player?.length) await dispatch('nextTurn')
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

                // Check if player is CPU
                if (getters.currentPlayer.type === 'cpu') {
                    await dispatch('CPUPlay')
                }
            } else {
                alert('SPEL AFGELOPEN')
            }
        }
    }
};
