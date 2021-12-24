

export default {
    state: {
        logs: []
    },
    getters: {
        logs: (s) => s.logs,
    },
    mutations: {
        logs: (s, v) => s.logs = v,
        addLog: (s, v) => s.logs.push({
            ...{
                action: 'Unknown action',
                player: 0,
                msg: 'Unknown action',
                time: new Date(),
            },
            ...v
        })
    },
    actions: {

    }
};
