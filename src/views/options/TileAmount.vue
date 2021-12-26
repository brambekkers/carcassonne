<template>
	<div class="container-fixed">
		<Card>
			<h1 class="h1 card-title">Card amount</h1>
			<p class="card-description">
				How many pieces of each kind of tile would you like to have in your game?
			</p>
			<div class="container-fluid">
				<div class="tiles">
					<div class="cell" v-for="(tile, i) of originalTiles">
						<Tile :tile="tile" />
						<fieldset class="amount">
							<button
								type="button"
								title="Down"
								class="sub"
								@click="updateAmount(i, -1)"
							>
								-
							</button>
							<input
								type="number"
								name="quantity"
								pattern="[0-9]+"
								min="0"
								v-model="tile.amount"
							/>

							<button type="button" title="Up" class="add" @click="updateAmount(i, 1)">
								+
							</button>
						</fieldset>
					</div>
				</div>
			</div>
			<div class="buttons">
				<button class="btn" @click="$router.push('/options')">Terug</button>
				<button class="btn" @click="save">Save</button>
			</div>
		</Card>
	</div>
</template>

<script>
import Card from "@/components/base/Card.vue";
import { mapActions, mapGetters } from "vuex";
import Tile from "@/components/board/Tile.vue";

export default {
	components: { Card, Tile },
	computed: {
		...mapGetters(["originalTiles"]),
	},
	methods: {
		...mapActions(["createTiles"]),
		updateAmount(i, amount) {
			const newAmount = this.originalTiles[i].amount + amount;
			if (newAmount >= 0) this.originalTiles[i].amount = newAmount;
		},
		save() {
			console.log(this.originalTiles);
		},
	},
	mounted() {
		this.createTiles(true);
	},
};
</script>

<style lang="scss" scoped>
.container-fixed {
	background: #070301;
	padding: 1rem;
	height: 100vh;

	.card-title,
	.card-description {
		text-align: center;
	}

	.container-fluid {
		position: relative;

		height: 69vh;
		width: 100%;

		.tiles {
			overflow-y: scroll;

			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			height: 100%;
			width: 100%;
			gap: 1rem;
			padding: 2rem 1rem;
			.cell {
				position: relative;
				width: 200px;
				height: 200px;

				.amount {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);

					button {
						position: absolute;
						width: 1.4rem;
						height: 1.4rem;
						top: 0.3rem;
						display: block;
						padding: 0;
						margin: 0;
						border: 0;
						background: #f7ede1;
						color: #877c6d;

						background-size: 5.6rem 2.8rem;
						overflow: hidden;
						white-space: nowrap;
						border-radius: 1.4rem;
						cursor: pointer;
						transition: opacity 0.15s;
						opacity: 0.5;
						font-size: 26px;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;

						&:hover {
							opacity: 1;
						}
					}
					button.sub {
						left: 0.6rem;
					}
					button.add {
						right: 0.6rem;
						background-position-x: -2.8rem;
					}

					input {
						font-size: 18px;
						font-weight: 500 !important;
						text-align: center !important;
						height: 2rem;
						padding: 0 2rem;
						border-radius: 1rem;
						border: 2px solid #f7ede1;
						color: #877c6d;
						background: #f7ede1;
						box-shadow: 0 10px 65px -10px rgb(0 0 0 / 25%);
						text-align: center;
						width: 100%;
						box-sizing: border-box;
						font-weight: lighter;

						&::-webkit-outer-spin-button,
						&::-webkit-inner-spin-button {
							-webkit-appearance: none;
							margin: 0;
						}
					}
				}
			}
		}
		&:before,
		&:after {
			content: "";
			position: absolute;
			z-index: 100;
			left: 0;
			pointer-events: none;
			width: 100%;
			height: 4rem;
		}

		&:before {
			top: 0;
			background-image: linear-gradient(
				to bottom,
				#f2e0c8,
				rgba(255, 255, 255, 0) 100%
			);
		}
		&:after {
			bottom: 0;
			background-image: linear-gradient(
				to bottom,
				rgba(255, 255, 255, 0),
				#f2e0c8 100%
			);
		}
	}

	.buttons {
		display: flex;
		margin-top: 1rem;
		justify-content: center;
		gap: 1rem;
	}
}
</style>
