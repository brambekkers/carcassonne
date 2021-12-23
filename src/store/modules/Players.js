import _ from 'lodash'
import Badges from '@/data/badges.js'

export default {
    state: {
        players: [],
        playerColors: ['#ff62ad', '#8d006d', "#201e1e", '#EFBE01', '#AC0104', '#DD6300', "#1A7F07", '#818181', "#005BA7", '#E5DED5'],
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
                    type: 'person',
                    smallMeeples: 7,
                    bigMeeples: 1,
                    points: 0,
                    badge,
                    color
                })
            }
        },
        removePlayer({ state }, player) {
            const playersIndex = state.players.findIndex(p => p.badge.name === player.badge.name)
            state.players.splice(playersIndex, 1)
            state.playerColors.push(player.color)
        },
        changeColor({ state }, player) {
            const newColor = state.playerColors.splice(0, 1)
            state.playerColors.push(player.color)
            player.color = newColor
        },
        changeType({ state }, player) {
            if (player.type === "person") player.type = "cpu"
            else if (player.type === "cpu") player.type = "person"

        }
    }
};
