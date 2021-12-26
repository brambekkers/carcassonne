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
            await dispatch('wait')


            // Place Meeple 

        },
        async calculatePosition({ getters, dispatch }) {
            // TEMP function
            // 0 deg
            if (getters.allMatchSpots.length) {
                const newPosition = _.sample(getters.allMatchSpots);
                for await (const i of new Array(newPosition.dir / 90).fill(0)) {
                    await dispatch('rotateTile', 90)
                }
                // for (let i = 0; i < (newPosition.dir / 90); i++) {
                //     await dispatch('tranpose', { array: getters.nextTile.format, dir: 90 })
                // }
                return newPosition.neighbor
            } else {
                alert('no posible tile')
            }
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
