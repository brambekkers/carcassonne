

export default {
    state: {

    },
    getters: {
    },
    mutations: {

    },
    actions: {
        placeMeeple({ getters, commit, dispatch }, { tile, x, y }) {
            commit('gameState', "idle")
            const cp = getters.currentPlayer

            if (cp.smallMeeples > 0) {
                // find type
                const type = tile.meepleSpots?.filter(
                    s => s.pos.x === x && s.pos.y === y
                )[0].type

                // Place meeple
                tile.meeplePos = { x, y }
                tile.meepleOwner = cp
                tile.meepleType = type

                // Update meeple amount
                cp.smallMeeples -= 1

                commit('addLog', {
                    action: 'Place Meeple',
                    msg: `${getters.currentPlayer?.name} placed a meeple on the ${type}.`,
                    player: getters.CPNum,
                });
            }


            setTimeout(() => {
                commit('gameState', "tile")
                dispatch('nextTurn')
            }, 500)
        },
    }
};
