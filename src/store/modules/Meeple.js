

export default {
    state: {
    },
    getters: {
    },
    mutations: {

    },
    actions: {
        placeMeeple({ getters }, { tile, x, y }) {
            tile.meeplePos = { x, y }
        },
    }
};
