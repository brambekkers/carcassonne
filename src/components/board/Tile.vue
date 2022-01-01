<template>
	<!-- Tiles that are placed -->
	<div class="tileContainer" :style="containerStyles" :class="containerRotate">
		<div
			class="tile"
			:style="tileStyles"
			v-if="!tile.empty"
			:class="{ghostTile: isGhost}"
			@click="place"
		>
			<TileSpots :tile="tile" :dir="tile.dir" :x="tile.x" :y="tile.y" />
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import TileSpots from "@/components/board/TileSpots.vue";
	export default {
		props: ["tile", "spot", "isGhost"],
		data() {
			return {
				timeout: null,
				hover: false
			};
		},
		components: { TileSpots },
		computed: {
			...mapGetters(["nextTile", "nextTilePos", "nextTilePlaced"]),
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
			},
			containerRotate() {
				return `container-rotate-${this.tile.dir % 360}`;
			}
		},
		methods: {
			...mapActions(["placeGhostTile"]),
			place() {
				if (this.spot?.match && this.isGhost) {
					this.placeGhostTile({ x: this.spot.x, y: this.spot.y });
				}
			}
		}
	};
</script>
