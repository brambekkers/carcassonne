

export default {
    state: {
        debug: {
            tileColors: true,
            emptyTiles: false,
        }
    },
    getters: {
        debug: (s) => s.debug,
        tileColors: (s) => s.debug.tileColors,
        emptyTiles: (s) => s.debug.emptyTiles,
    },
    mutations: {
        debug: (s, v) => s.debug = v,
    },

};
