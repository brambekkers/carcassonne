import _ from 'lodash'
import Badges from '@/data/badges.js'

export default {
    state: {
        playerBadges: Badges
    },
    getters: {
        playerBadges: (s) => s.playerBadges,
    },
    mutations: {
        playerBadges: (s, v) => s.playerBadges = v,

    },
    actions: {

    }
};
