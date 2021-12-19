<template>
	<div class="tile" :style="tileStyles" v-if="tile">
		<DebugTile v-if="debugMode" :format="tile.format" />
	</div>
	<div class="tile" :style="backStyles" v-else />
</template>

<script>
	import { mapGetters } from "vuex";
	import DebugTile from "@/components/board/DebugTile.vue";
	export default {
		props: ["tile"],
		components: { DebugTile },
		computed: {
			...mapGetters(["debugMode", "tileColors"]),
			tileStyles() {
				return {
					backgroundImage: `url('/${this.tile.src}')`
				};
			},
			backStyles() {
				return {
					backgroundImage: `url('/images/tiles/BackEmpty.png')`
				};
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tile {
		background-origin: center;
		background-size: cover;
		height: 200px;
		width: 200px;
		border-radius: 5%;
	}
</style>