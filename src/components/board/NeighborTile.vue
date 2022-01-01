<template>
	<div class="tile neighbor">
		<div
			class="glow animate__animated animate__pulse animate__infinite animate__slow"
			:class="{
			match: tile.match && posibleSpots,
		}"
		/>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		props: ["tile", "hover"],
		computed: {
			...mapGetters(["posibleSpots"])
		}
	};
</script>

<style lang="scss" scoped>
	.neighbor {
		width: 100%;
		height: 100%;
		padding: 10%;

		.glow {
			width: 100%;
			height: 100%;
			box-shadow: 0px 0px 10px 3px #fab13e, inset 0px 0px 50px 0px #fab13e;
			opacity: 0.7r;
		}

		.match {
			box-shadow: 0px 0px 10px 3px #4dbd05, inset 0px 0px 50px 0px #4dbd05;
		}
	}
</style>
