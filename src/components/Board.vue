<template>
	<div class="viewport">
		<div id="board" class="test" :style="boardStyles">
			<div v-for="(row, y) of board" class="row" :style="rowStyles">
				<div v-for="(cell, x) of row" class="cell" :style="cellStyles">
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
		...mapGetters(["tiles", "board", "boardSize", "tileSize", "tileGap"]),
		boardStyles() {
			return {
				width: `${(this.tileSize + this.tileGap) * this.boardSize.x}px`,
				height: `${(this.tileSize + this.tileGap) * this.boardSize.y}px`,
				gap: `${this.tileGap}px`,
			};
		},
		rowStyles() {
			return {
				gap: `${this.tileGap}px`,
			};
		},
		cellStyles() {
			return {
				width: `${this.tileSize}px`,
				height: `${this.tileSize}px`,
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
		}
	}
}
</style>
