<template>
	<div class="debug" :style="debugStyle">
		<div v-for="row of format" class="debug_row">
			<div v-for="cell of row" class="cell" :style="cellStyle(cell)"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: ["format", "dir"],
	computed: {
		...mapGetters(["tileColors"]),
		debugStyle() {
			return {
				transform: `rotate(${-this.dir}deg)`,
			};
		},
	},
	methods: {
		cellStyle(num) {
			let color = "red";
			if (num === 0) color = "green";
			if (num === 1) color = "black";
			if (num === 2) color = "yellow";
			if (num === 3) color = "purple";
			return {
				background: `${color}`,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.debug {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	.debug_row {
		padding: 0;
		display: flex;
		height: 100%;

		.cell {
			width: 100%;
			opacity: 0.3;
		}
	}
}
</style>
