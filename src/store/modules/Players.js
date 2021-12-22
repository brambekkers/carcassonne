import _ from 'lodash'
import Badges from '@/data/badges.js'

export default {
    state: {
        players: [],
        playerColors: ['#A24270', '#66315A', "#2A2421", '#EFBE01', '#AC0104', '#DD6300', "#1A7F07", '#5C3C30', '#9A957E', "#005BA7", '#E5DED5'],
        playerBadges: Badges
    },
    getters: {
        players: (s) => s.players,
        playerBadges: (s) => s.playerBadges,
    },
    mutations: {
        players: (s, v) => s.players = v,
        playerBadges: (s, v) => s.playerBadges = v,

    },
    actions: {
        addPlayer({ state }, { badge }) {
            const color = state.playerColors.splice(_.random(state.playerColors.length - 1), 1)[0]

            if (state.players.length < 6) {
                state.players.push({
                    name: badge.name,
                    smallMeeples: 7,
                    bigMeeples: 1,
                    points: 0,
                    badge,
                    color
                })
            }
        },
        removePlayer({ state, commit }, player) {
            const players = state.players.filter(p => p.badge.name != player.badge.name)
            state.playerColors.push(player.color)
            commit('players', players)

        }
    }
};
