<template>
	<div class="board" :style="boardStyles">
		<div v-for="row of board" class="row">
			<div v-for="cell of row" class="cell">
				{{cell}}
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
		computed: {
			...mapGetters(["tiles", "board", "boardSize", "tileSize"]),
			boardStyles() {
				return {
					color: "red",
					width: `${this.tileSize * this.boardSize.x}px`,
					height: `${this.tileSize * this.boardSize.y}px`
				};
			}
		},
		methods: {
			...mapActions(["createBoard"])
		},
		created() {
			this.createBoard();
		}
	};
</script>

<style lang="scss" scoped>
	.board {
		display: flex;
		flex-direction: column;
		.row {
			display: flex;
			height: 100%;

			.cell {
				width: 100%;
				opacity: 0.3;
				border: solid 1px red;
			}
		}
	}
</style>