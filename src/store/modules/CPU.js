import _ from "lodash";


export default {
    state: {
        CPUTimeout: 1000,
    },
    getters: {

    },
    mutations: {
    },
    actions: {
        async CPUPlay({ state, dispatch }) {
            console.log('CPU plays')
            // Calculate the best score of play
            const { x, y } = await dispatch('calculatePosition')
            console.log(x, y)
            await dispatch('wait')

            // Place tiles
            await dispatch('placeTile', { x, y })


            // Place Meeple 

        },
        async calculatePosition({ getters, dispatch }) {

            // TEMP function
            // 0 deg
            if (getters.matchSpots.length) {
                return _.sample(getters.matchSpots);
            }
            await dispatch('rotateTile', 90)
            // 90 deg
            if (getters.matchSpots.length) {
                return _.sample(getters.matchSpots);
            }
            await dispatch('rotateTile', 90)
            // 180 deg
            if (getters.matchSpots.length) {
                return _.sample(getters.matchSpots);
            }
            await dispatch('rotateTile', 90)
            // 270 deg
            if (getters.matchSpots.length) {
                return _.sample(getters.matchSpots);
            }

            alert('no posible tile')


        },
        wait({ state }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, state.CPUTimeout)
            })
        }
    }

};
