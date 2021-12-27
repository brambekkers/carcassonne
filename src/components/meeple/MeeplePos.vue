<template>
	<div class="container-fixed" v-if="isPlaceSpot" @click="placeMeeple({tile, x, y})">
		<div
			class="placeMeeple animate__animated animate__bounce animate__slow animate__infinite"
			@click="placeMeeple({tile, x, y})"
		>
			<div class="meepleContainer">
				<Meeple :color="currentPlayer.color" />
			</div>
			<i class="fas fa-caret-down" :style="caretStyle" />
		</div>
		<div class="placeSpot animate__animated animate__pulse animate__infinite animate__slower" />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import Meeple from "@/components/meeple/Meeple.vue";

	export default {
		props: ["tile", "x", "y"],
		components: { Meeple },
		computed: {
			...mapGetters(["currentPlayer"]),
			isPlaceSpot() {
				return this.tile.meepleSpots?.filter(
					s => s.pos.x === this.x && s.pos.y === this.y
				).length;
			},
			caretStyle() {
				return {
					color: this.currentPlayer.color
				};
			}
		},
		methods: {
			...mapActions(["placeMeeple"])
		}
	};
</script>

<style lang="scss" scoped>
	.container-fixed {
		position: relative;
		height: 100%;
		width: 100%;
		cursor: pointer;
		z-index: 200;

		.placeSpot,
		.placeMeeple {
			position: absolute;
			cursor: pointer;
		}
		.placeSpot {
			background: rgba(0, 0, 0, 0.4);
			top: 41%;
			left: 15%;
			border-radius: 50%;
			padding: 20% 20% 20% 50%;
		}

		.placeMeeple {
			bottom: 0;
			left: -7px;
			width: max-content;
			height: max-content;
			display: flex;
			flex-direction: column;
			text-align: center;
			padding-bottom: 70%;

			.meepleContainer {
				width: 50px;
				height: 50px;

				svg {
					width: 100%;
					height: 100%;
				}
			}

			i {
				width: 100%;
				font-size: 4rem;
				line-height: 25%;
				color: black;
			}
		}
	}
</style>