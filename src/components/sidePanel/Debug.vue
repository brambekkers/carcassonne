<template>
	<CardSM>
		<div class="container">
			<h5 class="card-title">Game info</h5>
			<hr />
			<p>Tiles left: {{ tiles.length }}</p>
			<p>Current Player: {{ currentPlayer?.name }}({{ CPNum }})</p>
			<p>Game State: {{ gameState }}</p>
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
	<CardSM>
		<div class="container">
			<h5 class="card-title">Graphics</h5>
			<hr />
			<div>
				<label for="perspective" class="form-label"
					>Perspective: ({{ perspective.perspective }})</label
				>
				<input
					type="range"
					class="form-range"
					min="0"
					max="5000"
					step="200"
					v-model="perspective.perspective"
					id="perspective"
				/>
			</div>
			<div>
				<label for="rotateX" class="form-label"
					>Rotate X: ({{ perspective.rotateX }})</label
				>
				<input
					type="range"
					class="form-range"
					min="0"
					max="75"
					step="1"
					v-model="perspective.rotateX"
					id="rotateX"
				/>
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
		...mapGetters([
			"debug",
			"tiles",
			"currentPlayer",
			"CPNum",
			"perspective",
			"gameState",
		]),
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
