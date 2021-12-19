<template>
	<div class="tile" :style="tileStyles" v-if="tile">
		<DebugTile v-if="debugMode" :format="tile.format" :dir="tile.dir" />
	</div>
	<GhostTile
		@mouseleave="hover = false"
		:tile="hover ? nextTile : null"
		v-else-if="nextTile && hover"
		:x="x"
		:y="y"
	/>
	<div
		class="tile back"
		:style="backStyles"
		v-else
		@mouseover="hover = true"
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
			hover: false,
		};
	},
	components: { DebugTile, GhostTile },
	computed: {
		...mapGetters([
			"debugMode",
			"tileColors",
			"tileBacks",
			"nextTile",
			"tileSize",
		]),
		tileStyles() {
			return {
				width: `${this.tileSize}px`,
				height: `${this.tileSize}px`,
				backgroundImage: `url('/${this.tile.src}')`,
				transform: `rotate(${this.tile.dir}deg)`,
			};
		},
		backStyles() {
			return {
				backgroundImage:
					this.debugMode && this.tileBacks
						? `url('/images/tiles/BackLogo.png')`
						: "",
				width: `${this.tileSize}px`,
				height: `${this.tileSize}px`,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.tile {
	background-origin: center;
	background-size: cover;

	border-radius: 5%;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	overflow: hidden;
}

.back {
	background: rgba(0, 0, 0, 00.2);
	background-origin: center;
	background-size: cover;
}
</style>
