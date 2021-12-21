<template>
	<CardSM>
		<h5 class="card-title">Game info</h5>
		<p>Tiles left: {{tiles.length}}</p>
	</CardSM>
	<CardSM>
		<h5 class="card-title">Debug info</h5>

		<hr />
		<div>
			<input type="checkbox" v-model="debug.tileColors" /> Tile Colors
		</div>

		<div>
			<input type="checkbox" v-model="debug.emptyTiles" /> Empty Spots
		</div>
		<div>
			<button @click="toggle(true)">All</button>
			<button @click="toggle(false)">Nothing</button>
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
			...mapGetters(["debug", "tiles"])
		},
		methods: {
			toggle(bool) {
				for (const key in this.debug) {
					this.debug[key] = bool;
				}
			}
		}
	};
</script>

<style lang="scss" scoped></style>
