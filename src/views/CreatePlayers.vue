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
			</div>
		</Card>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import Card from "@/components/base/Card.vue";
	import CardSM from "@/components/base/Card-sm.vue";
	import BadgePicker from "@/components/player/BadgePicker.vue";
	import PlayerInput from "@/components/player/PlayerInput.vue";
	export default {
		components: { Card, CardSM, BadgePicker, PlayerInput },
		computed: {
			...mapGetters(["players"])
		}
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
				max-height: 65vh;
				overflow-y: scroll;
				min-width: 400px;
				width: 400px;
				max-height: 75vh;
				margin-left: 2rem;
				.playerlist {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
				}
			}
		}
	}
</style>
