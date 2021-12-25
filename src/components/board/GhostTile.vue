<template>
	<div class="container-fixed">
		<div class="tile ghostTile" :style="tileStyles" @click.self="place" />
		<img
			class="rotateLeft"
			src="@/assets/icons/left.png"
			@click="rotateTile(-90)"
		/>
		<img
			class="rotateRight"
			src="@/assets/icons/right.png"
			@click="rotateTile(90)"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	props: ["tile", "x", "y"],
	computed: {
		...mapGetters(["tileSize", "nextTile"]),

		tileStyles() {
			return {
				width: `${this.tileSize}px`,
				height: `${this.tileSize}px`,
				backgroundImage: `url('/${this.nextTile.src}')`,
				transform: `rotate(${this.nextTile.dir}deg)`,
			};
		},
	},
	methods: {
		...mapActions(["placeTile", "rotateTile"]),
		place() {
			if (this.tile.match) {
				this.placeTile({ x: this.x, y: this.y });
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.container-fixed {
	position: relative;
	.rotateLeft,
	.rotateRight {
		position: absolute;
		cursor: pointer;
		top: 3%;
		width: 15%;
		transition: all 0.2s ease;
	}

	.rotateRight {
		right: 3%;
		&:hover {
			transform: rotate(30deg);
		}
	}
	.rotateLeft {
		right: 18%;
		&:hover {
			transform: rotate(-30deg);
		}
	}
}
</style>
