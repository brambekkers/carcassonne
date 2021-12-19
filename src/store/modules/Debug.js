

export default {
    state: {
        debugMode: true,
        debug: {
            tileColors: true,
        }
    },
    getters: {
        debugMode: (s) => s.debugMode,
        tileColors: (s) => s.debug.tileColors,
    },
    mutations: {
        debug: (s, v) => s.debug = v,
    },

};
