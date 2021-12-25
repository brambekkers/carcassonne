

export default {
    state: {
        debug: {
            tileColors: false,
            emptyTiles: false,
            posibleSpots: true,
        }
    },
    getters: {
        debug: (s) => s.debug,
        tileColors: (s) => s.debug.tileColors,
        emptyTiles: (s) => s.debug.emptyTiles,
        posibleSpots: (s) => s.debug.posibleSpots,
    },
    mutations: {
        debug: (s, v) => s.debug = v,
    },

};
