<template>
	<!-- Tiles that are placed -->
	<div class="tile" :style="tileStyles" v-if="!tile.empty">
		<DebugTile v-if="tileColors" :format="tile.format" :dir="tile.dir" />
	</div>

	<!-- Ghost tile that spawns if tile is hoverd -->
	<GhostTile
		@mouseleave="hover = false"
		:tile="tile"
		v-else-if="nextTile && hover && tile.neighbor"
		:x="tile.x"
		:y="tile.y"
	/>

	<div
		:style="backStyles"
		:class="{
			'tile back': emptyTiles,
			'tile neighbor  ': tile.neighbor,
			'match': tile.match,
		}"
		v-else
		@mouseover="hoverTile"
		@mouseleave="hover = false"
	/>
</template>

<script>
	import { mapGetters } from "vuex";
	import DebugTile from "@/components/board/DebugTile.vue";
	import GhostTile from "@/components/board/GhostTile.vue";
	export default {
		props: ["tile", "x", "y"],
		data() {
			return {
				timeout: null,
				hover: false
			};
		},
		components: { DebugTile, GhostTile },
		computed: {
			...mapGetters(["tileColors", "nextTile", "tileSize", "emptyTiles"]),
			tileStyles() {
				return {
					width: `${this.tileSize}px`,
					height: `${this.tileSize}px`,
					backgroundImage: `url('/${this.tile.src}')`,
					transform: `rotate(${this.tile.dir}deg)`
				};
			},
			backStyles() {
				return {
					width: `${this.tileSize}px`,
					height: `${this.tileSize}px`
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
	.tile {
		background-origin: center;
		background-size: cover;

		border-radius: 5%;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		overflow: hidden;
		transition: all 0.2s ease;
	}

	.back {
		background-image: url("/images/tiles/BackLogo.png");
	}

	.neighbor {
		background: rgba(0, 0, 0, 0.2);
	}

	.match {
		background: rgba(0, 255, 0, 0.1);
	}
</style>
