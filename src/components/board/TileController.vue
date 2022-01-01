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
		components: { Tile, NeighborTile },
		computed: {
			...mapGetters([
				"nextTile",
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
</style>
