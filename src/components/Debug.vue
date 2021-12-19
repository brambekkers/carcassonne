<template>
	<div id="debugMode">
		<div>
			<input type="checkbox" v-model="debug.debugMode" />
			Debug mode
		</div>
		<hr />
		<div>
			<input type="checkbox" v-model="debug.tileColors" /> Tile Colors
		</div>
		<div>
			<input type="checkbox" v-model="debug.tileBacks" /> Tile Backs
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		computed: {
			...mapGetters(["debug"])
		}
	};
</script>

<style lang="scss" scoped>
	#debugMode {
		position: fixed;
		z-index: 999;
		left: 1rem;
		top: 1rem;
		color: red;
		font-weight: 700;
		background-color: lightcyan;
		padding: 0.5rem;
	}
</style>