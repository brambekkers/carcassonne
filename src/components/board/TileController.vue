<template>
	<!-- Placed Tile -->
	<Tile :tile="tile" v-if="!tile.empty " />

	<!-- GHOSTTILE: Possible tiles to be placed -->
	<Tile
		:tile="nextTile"
		:isGhost="true"
		v-else-if="nextTile && tile.neighbor && (ghostTilePlaced || hover)"
		:spot="tile"
		@mouseleave="hover = false"
	/>

	<!-- Neighbor spots -->
	<NeighborTile
		v-else-if="
			tile.neighbor &&
			currentPlayer?.type === 'person' &&
			gameState === 'tile' &&
			!nextTilePlaced
		"
		:tile="tile"
		:hover="hover"
		@mouseover="hoverTile"
		@mouseleave="hover = false"
	/>
	<!-- Backside of tile -->
	<div class="tileContainer" v-else-if="emptyTiles" :style="containerStyles">
		<div class="tile back" />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import TileSpots from "@/components/board/TileSpots.vue";
	import Tile from "@/components/board/Tile.vue";
	import NeighborTile from "@/components/board/NeighborTile.vue";
	export default {
		props: ["tile"],
		data() {
			return {
				timeout: null,
				hover: false
			};
		},
		components: { Tile, TileSpots, NeighborTile },
		computed: {
			...mapGetters([
				"tileColors",
				"nextTile",
				"tileSize",
				"emptyTiles",
				"currentPlayer",
				"gameState",
				"nextTilePos",
				"nextTilePlaced"
			]),
			ghostTilePlaced() {
				return (
					this.nextTilePlaced &&
					this.nextTilePos.x === this.tile.x &&
					this.nextTilePos.y === this.tile.y
				);
			},
			containerStyles() {
				return {
					transform: `rotate(${this.tile.dir}deg)`
				};
			},
			tileStyles() {
				return {
					backgroundImage: `url('/${this.tile.src}')`
				};
			}
		},
		methods: {
			// To do: Check if this is the most efficient methode
			hoverTile() {
				// Clear timeout
				if (this.timeout) {
					clearTimeout(this.timeout);
				}

				this.hover = true;

				// setTimeout
				this.timeout = setTimeout(() => {
					this.hover = false;
				}, 1000);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.match {
		background: rgba(0, 255, 0, 0.1);
		border-radius: 5px;
	}
</style>
