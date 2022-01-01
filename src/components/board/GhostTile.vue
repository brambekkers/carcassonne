<template>
	<div class="tileContainer container-fixed" :style="containerStyles" :class="containerRotate">
		<div class="tile ghostTile" :style="tileStyles" @click.self="place" />
		<img
			class="rotateLeft"
			src="@/assets/icons/left.png"
			@click="rotateTile(-90)"
			v-show="!nextTilePlaced"
		/>
		<img
			class="rotateRight"
			src="@/assets/icons/right.png"
			@click="rotateTile(90)"
			v-show="!nextTilePlaced"
		/>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		props: ["tile", "x", "y"],
		computed: {
			...mapGetters(["tileSize", "nextTile", "nextTilePlaced"]),
			containerStyles() {
				return {
					transform: `rotate(${this.nextTile.dir}deg)`
				};
			},
			tileStyles() {
				return {
					width: `${this.tileSize}px`,
					height: `${this.tileSize}px`,
					backgroundImage: `url('/${this.nextTile.src}')`
				};
			},
			containerRotate() {
				return `container-rotate-${this.nextTile.dir % 360}`;
			}
		},
		methods: {
			...mapActions(["placeGhostTile", "rotateTile"]),
			place() {
				if (this.tile.match) {
					this.placeGhostTile({ x: this.x, y: this.y });
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
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
</style>
