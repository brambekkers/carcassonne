

export default {
    state: {
        debug: {
            debugMode: true,
            tileColors: true,
            tileBacks: false,
        }
    },
    getters: {
        debug: (s) => s.debug,
        debugMode: (s) => s.debug.debugMode,
        tileColors: (s) => s.debug.tileColors,
        tileBacks: (s) => s.debug.tileBacks,
    },
    mutations: {
        debug: (s, v) => s.debug = v,
    },

};
