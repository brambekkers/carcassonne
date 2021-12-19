<template>
	<div class="container" :style="containerStyles">
		<div class="tile" :style="tileStyles" @click.self="place"></div>
		<img class="left" src="@/assets/icons/left.png" @click="rotateTile(-90)" />
		<img class="right" src="@/assets/icons/right.png" @click="rotateTile(90)" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	props: ["tile", "x", "y"],
	computed: {
		...mapGetters(["tileSize"]),
		containerStyles() {
			return {
				width: `${this.tileSize}px`,
				height: `${this.tileSize}px`,
			};
		},
		tileStyles() {
			return {
				backgroundImage: `url('/${this.tile.src}')`,
				transform: `rotate(${this.tile.dir}deg)`,
			};
		},
	},
	methods: {
		...mapActions(["placeTile", "rotateTile"]),
		place() {
			console.log("place tile");
			this.placeTile({ x: this.x, y: this.y });
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	position: relative;

	.tile {
		background-origin: center;
		background-size: cover;
		width: 100%;
		height: 100%;
		border-radius: 5%;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		overflow: hidden;
		opacity: 0.5;
		transition: all 0.2s ease;

		&:hover {
			transform: scale(1.1);
		}
	}
	.left,
	.right {
		position: absolute;
		cursor: pointer;
		top: 3%;
		width: 15%;
		transition: all 0.2s ease;
	}

	.right {
		right: 3%;
		&:hover {
			transform: rotate(30deg);
		}
	}
	.left {
		right: 18%;
		&:hover {
			transform: rotate(-30deg);
		}
	}
}
</style>
