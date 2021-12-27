<template>
	<div class="container-fixed">
		<Card>
			<h1 class="h1 card-title">Add players</h1>
			<p class="card-description">Choose the characters you want to play with!</p>

			<div class="row">
				<div class="col details ps-4">
					<CardSM>
						<h1 class="card-title">Players</h1>
						<div class="playerlist">
							<PlayerBar :hasInput="true" :player="player" v-for="player of players" />
						</div>
					</CardSM>
				</div>
				<div class="col h-100">
					<BadgePicker />
					<div class="buttons">
						<button class="btn" @click="goBack">Go Back</button>
						<button class="btn" @click="startGame">Start Game</button>
					</div>
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
	import PlayerBar from "@/components/player/PlayerBar.vue";
	export default {
		components: { Card, CardSM, BadgePicker, PlayerBar },
		computed: {
			...mapGetters(["players"])
		},
		methods: {
			...mapActions(["newGame", "nextTurn"]),

			goBack() {
				this.$router.push("/");
			},
			async startGame() {
				if (this.players.length >= 2) {
					this.$router.push("/game");
					await this.newGame();
					await this.nextTurn();
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container-fixed {
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
			height: calc(100vh - 200px - 7vw);
			max-height: 100%;
			margin-top: 1rem;
			.details {
				overflow-y: scroll;
				min-width: max-content;
				max-width: max-content;
				height: 100%;

				.playerlist {
					padding: 3rem 1em;
					height: max-content;
					display: flex;
					flex-direction: column;
					overflow-y: scroll;
					gap: 1rem;
					overflow-x: hidden;
				}
			}
			.buttons {
				margin-top: 15px;
				width: 100%;
				display: flex;
				justify-content: center;
				gap: 1rem;
			}
		}
	}
</style>
