<template>
	<div class="container">
		<Card>
			<h1 class="h1 card-title">Add players</h1>
			<p class="card-description">Choose the characters you want to play with!</p>

			<div class="row">
				<div class="col-details">
					<CardSM>
						<h1 class="card-title">Players</h1>
						<div class="playerlist">
							<div v-for="player of players">
								<PlayerInput :player="player" />
							</div>
						</div>
					</CardSM>
				</div>
				<BadgePicker />
				<div class="buttons">
					<button class="btn" @click="goBack">Go Back</button>
					<button class="btn" @click="startGame">Start Game</button>
				</div>
			</div>
		</Card>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/base/Card.vue";
import CardSM from "@/components/base/Card-sm.vue";
import BadgePicker from "@/components/player/BadgePicker.vue";
import PlayerInput from "@/components/player/PlayerInput.vue";
export default {
	components: { Card, CardSM, BadgePicker, PlayerInput },
	computed: {
		...mapGetters(["players"]),
	},
	methods: {
		...mapActions(["newGame"]),

		goBack() {
			this.$router.push("/");
		},
		async startGame() {
			if (this.players.length >= 2) {
				this.$router.push("/game");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	background: #070301;
	padding: 0 1rem;
	height: 100vh;
	max-height: 100vh;
	overflow: hidden;

	.card-description {
		text-align: center;
	}
	.row {
		display: flex;
		height: 100%;
		max-height: 100%;
		margin-top: 1rem;
		.col-details {
			overflow-y: scroll;
			min-width: 400px;
			width: 400px;
			max-height: 75vh;
			margin-left: 2rem;
			.playerlist {
				padding: 0 2rem;
				padding-bottom: 3rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				overflow-y: scroll;
			}
		}
		.buttons {
			position: absolute;
			bottom: 3vw;
			width: 100%;
			left: 0;
			margin-bottom: 1rem;
			display: flex;
			justify-content: center;
			gap: 1rem;
		}
	}
}
</style>
