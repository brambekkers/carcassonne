<template>
	<!-- Tiles that are placed -->
	<div class="tileContainer" v-if="!tile.empty || tile.neighbor || emptyTiles">
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
			class="tile neighbor"
			:class="{
				match: tile.match && posibleSpots,
			}"
			v-else-if="tile.neighbor"
			@mouseover="hoverTile"
			@mouseleave="hover = false"
		/>

		<div v-else-if="emptyTiles" :style="backStyles" class="tile back" />
	</div>
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
			hover: false,
		};
	},
	components: { DebugTile, GhostTile },
	computed: {
		...mapGetters([
			"tileColors",
			"nextTile",
			"tileSize",
			"emptyTiles",
			"posibleSpots",
		]),
		tileStyles() {
			return {
				backgroundImage: `url('/${this.tile.src}')`,
				transform: `rotate(${this.tile.dir}deg)`,
			};
		},
		backStyles() {
			return {};
		},
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
		},
	},
};
</script>

<style lang="scss" scoped>
.neighbor {
	background: rgba(0, 0, 0, 0.2);
	border-radius: 5px;
}

.match {
	background: rgba(0, 255, 0, 0.1);
	border-radius: 5px;
}
</style>
