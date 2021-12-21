<template>
	<div class="viewport">
		<div id="board" class="test" :style="boardStyles">
			<div v-for="(row, y) of board" class="row">
				<div v-for="(cell, x) of row" class="cell">
					<Tile :tile="cell" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ScrollBooster from "scrollbooster";
import Tile from "@/components/board/Tile.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	components: { Tile },
	data() {
		return {
			sb: null,
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
	mounted() {
		// Create new scroll instance
		const view = document.querySelector(".viewport");
		this.sb = new ScrollBooster({
			viewport: view,
			scrollMode: "transform",
		});

		// Position in middle
		const x = view.scrollWidth / 2 - view.offsetWidth / 2;
		const y = view.scrollHeight / 2 - view.offsetHeight / 2;
		this.sb.setPosition({ x, y });
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
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	cursor: grab;
}
#board {
	min-width: 4000px;
	min-height: 4000px;
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
