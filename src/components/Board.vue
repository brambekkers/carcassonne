<template>
	<div id="board" class="test" :style="boardStyles">
		<div v-for="(row, y) of board" class="row">
			<div v-for="(cell, x) of row" class="cell">
				<Tile :tile="cell" />
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
		...mapActions(["createBoard", "rotateTile"]),
	},
	created() {
		this.createBoard();

		document.addEventListener("keypress", (e) => {
			if (e.key == "r") {
				this.rotateTile(90);
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.viewport {
	min-width: 4000px;
	min-height: 4000px;
}
#board {
	min-width: 4000px;
	min-height: 4000px;
	position: absolute;
	display: flex;
	flex-direction: column;
	.row {
		display: flex;
		height: 100%;

		.cell {
			width: 100%;
			margin: 0.1%;
		}
	}
}
</style>
