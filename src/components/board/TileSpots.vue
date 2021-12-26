<template>
	<div class="debug" :style="debugStyle">
		<div v-for="row of format" class="debug_row">
			<div v-for="cell of row" class="cell">
				<div class="background-color" v-if="tileColors" :style="cellStyle(cell)" />
				<div
					class="
						placeMeeple
						animate__animated animate__bounce animate__slow animate__infinite
					"
					v-if="lastTile.x === x && lastTile.y === y"
				>
					<div class="meeple" />
					<i class="fas fa-caret-down" />
				</div>
				<div class="placeSpot" v-if="lastTile.x === x && lastTile.y === y"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: ["format", "dir", "x", "y"],
	computed: {
		...mapGetters(["tileColors", "lastTile"]),
		debugStyle() {
			return {
				transform: `rotate(${-this.dir}deg)`,
			};
		},
	},
	methods: {
		cellStyle(num) {
			if (this.tileColors) {
				let color = "red";
				if (num === 0) color = "green";
				if (num === 1) color = "black";
				if (num === 2) color = "yellow";
				if (num === 3) color = "purple";
				return {
					background: `${color}`,
				};
			}
			return "";
		},
	},
};
</script>

<style lang="scss" scoped>
.debug {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	.debug_row {
		padding: 0;
		display: flex;
		height: 100%;

		.cell {
			width: 100%;
			position: relative;

			.background-color {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				border: 1px solid black;
				opacity: 0.5;
			}

			&:hover {
				.placeMeeple,
				.placeSpot {
					opacity: 1 !important;
				}
			}

			.placeSpot {
				position: absolute;
				/* background: rgba(0, 0, 0, 0.4); */
				top: 25%;
				left: 25%;
				bottom: 25%;
				right: 25%;
				border-radius: 50%;
				border: 8px solid rgba(0, 0, 0, 0.4);

				padding: 5px 5px 5px 15px;
				opacity: 0;
			}

			.placeMeeple {
				position: absolute;
				bottom: 0;
				left: -7px;
				width: max-content;
				height: max-content;
				display: flex;
				flex-direction: column;
				opacity: 0;
				text-align: center;
				pointer-events: none;

				.meeple {
					width: 100%;
					height: 70px;
					width: 70px;
					background: url("@/assets/meeple/meeple.svg");
					background-size: cover;
				}
				i {
					width: 100%;
					font-size: 4rem;
					height: max-content;
					margin-top: -30%;
					color: black;
				}
			}
		}
	}
}
</style>
