<template>
	<div id="board" :style="boardStyles">
		<div v-for="(row, y) of board" class="row">
			<div v-for="(cell, x) of row" class="cell">
				<Tile :tile="cell" :x="x" :y="y" />
			</div>
		</div>
	</div>
</template>

<script>
import Tile from "@/components/board/Tile.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	components: { Tile },
	data() {
		return {
			pos: { top: 0, left: 0, x: 0, y: 0 },
			dragEl: null,
		};
	},
	computed: {
		...mapGetters(["tiles", "board", "boardSize", "tileSize"]),
		boardStyles() {
			return {
				color: "red",
				width: `${this.tileSize * this.boardSize.x}px`,
				height: `${this.tileSize * this.boardSize.y}px`,
			};
		},
	},
	methods: {
		...mapActions(["createBoard"]),
	},
	created() {
		this.createBoard();
	},
};
</script>

<style lang="scss" scoped>
#board {
	display: flex;
	flex-direction: column;
	.row {
		display: flex;
		height: 100%;

		.cell {
			width: 100%;
			margin: 0.3%;
		}
	}
}
</style>
