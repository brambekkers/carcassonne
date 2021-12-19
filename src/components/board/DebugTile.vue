<template>
	<div class="debug">
		<div v-for="row of format" class="row">
			<div v-for="cell of row" class="cell" :style="debugStyles(cell)"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["format"],

		methods: {
			debugStyles(num) {
				let color = "red";
				if (num === 0) color = "green";
				if (num === 1) color = "black";
				if (num === 2) color = "yellow";
				if (num === 3) color = "purple";
				return {
					background: `${color}`
				};
			}
		}
	};
</script>

<style lang="scss" scoped>
	.debug {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.row {
			display: flex;
			height: 100%;

			.cell {
				width: 100%;
				opacity: 0.3;
			}
		}
	}
</style>