<template>
	<div class="widget">
		<h5 class="widget_title">Debug info</h5>
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
</style>