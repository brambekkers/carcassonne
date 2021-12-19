<template>
	<div class="tile" :style="tileStyles" @click="place" />
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		props: ["tile", "x", "y"],
		computed: {
			tileStyles() {
				return {
					backgroundImage: `url('/${this.tile.src}')`
				};
			}
		},
		methods: {
			...mapActions(["placeTile"]),
			place() {
				console.log("place tile");

				this.placeTile({ x: this.x, y: this.y });
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
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		overflow: hidden;
		opacity: 0.5;
		transition: all 0.2s ease;

		&:hover {
			transform: scale(1.1);
		}
	}
</style>