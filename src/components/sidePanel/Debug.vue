<template>
	<CardSM>
		<div class="container">
			<h5 class="card-title">Game info</h5>
			<hr />
			<p>Tiles left: {{ tiles.length }}</p>
			<p>Current Player: {{ currentPlayer?.name }}({{ CPNum }})</p>
		</div>
	</CardSM>
	<CardSM>
		<div class="container">
			<h5 class="card-title">Debug info</h5>
			<hr />
			<div><input type="checkbox" v-model="debug.tileColors" /> Tile Colors</div>
			<div>
				<input type="checkbox" v-model="debug.posibleSpots" /> Posible Spots
			</div>
			<div><input type="checkbox" v-model="debug.emptyTiles" /> Empty Spots</div>
			<div class="buttons">
				<button class="btn btn-sm" @click="toggle(true)">All</button>
				<button class="btn btn-sm" @click="toggle(false)">Nothing</button>
			</div>
		</div>
	</CardSM>
</template>

<script>
import { mapGetters } from "vuex";
import CardSM from "@/components/base/Card-sm.vue";

export default {
	data() {
		return {};
	},
	components: { CardSM },
	computed: {
		...mapGetters(["debug", "tiles", "currentPlayer", "CPNum"]),
	},
	methods: {
		toggle(bool) {
			for (const key in this.debug) {
				this.debug[key] = bool;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.buttons {
	margin: 1rem;
	display: flex;
	justify-content: space-around;
}
.container {
	padding: 0 1rem;
}
</style>
