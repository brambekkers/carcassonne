<template>
	<div class="debug" :style="debugStyle">
		<div v-for="(row, formatY) of tile.format" class="debug_row">
			<div v-for="(cell, formatX) of row" class="cell">
				<div class="background-color" v-if="tileColors" :style="cellStyle(cell)" />

				<MeeplePos
					:tile="tile"
					:x="formatX"
					:y="formatY"
					v-if="gameState === 'meeple' && lastTile.x === x && lastTile.y === y"
				/>
				<div class="meepleContainer">
					<Meeple
						v-if="tile.meeplePos?.x === formatX && tile.meeplePos?.y === formatY"
						:color="tile.meepleOwner.color"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MeeplePos from "@/components/meeple/MeeplePos.vue";
import Meeple from "@/components/meeple/Meeple.vue";
import { mapGetters } from "vuex";
export default {
	props: ["tile", "dir", "x", "y"],
	components: { Meeple, MeeplePos },
	computed: {
		...mapGetters(["tileColors", "lastTile", "gameState"]),
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

			.meepleContainer,
			.background-color {
				position: absolute;
				top: -20%;
				bottom: 0;
				left: -10%;
				right: -10%;

				svg {
					height: 115%;
					width: 110%;
				}
			}

			.background-color {
				border: 1px solid black;
				opacity: 0.5;
			}
		}
	}
}
</style>
