<template>
	<CardSM>
		<h5 class="card-title">Debug info</h5>
		<div>
			<input type="checkbox" v-model="debug.debugMode" />
			Debug mode
		</div>
		<hr />
		<div><input type="checkbox" v-model="debug.tileColors" /> Tile Colors</div>
		<div><input type="checkbox" v-model="debug.tileBacks" /> Tile Backs</div>
		<div><input type="checkbox" v-model="debug.emptyTiles" /> Empty Tiles</div>
	</CardSM>
</template>

<script>
import { mapGetters } from "vuex";
import CardSM from "@/components/base/Card-sm.vue";

export default {
	components: { CardSM },

	computed: {
		...mapGetters(["debug"]),
	},
};
</script>

<style lang="scss" scoped></style>
