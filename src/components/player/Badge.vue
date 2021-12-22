<template>
	<div class="badge" :style="badgeStyles">
		<div class="badge-color" :style="colorStyles" />
		<div class="badge-img" :style="imageStyles" :class="{ zoom: zoom }" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: ["badge", "size", "zoom", "background"],
	computed: {
		...mapGetters(["players"]),
		player() {
			return this.players?.find((p) => p.badge.src === this.badge.src);
		},
		colorStyles() {
			return {
				background: this.player?.color || "",
			};
		},
		badgeStyles() {
			return {
				width: `${this.size}px`,
				height: `${this.size}px`,
			};
		},
		imageStyles() {
			return {
				backgroundImage: `url('/${this.badge.src}')`,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
@function randomNum($min, $max) {
	$rand: random();
	$randomNum: $min + floor($rand * (($max - $min) + 1));

	@return $randomNum;
}
.badge {
	position: relative;
	background: #f8eebc;
	border-radius: 50%;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);

	border: solid 2px #bd8d4c;
	overflow: hidden;
	cursor: pointer;

	&:hover {
		.badge-img {
			transform: scale(150%) translateY(#{randomNum(10, 20)}+ "%")
				rotate(#{randomNum(-20, 20)}+ "deg");
		}
	}

	.badge-color {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		opacity: 0.7;
	}

	.badge-img {
		position: absolute;
		top: 0;

		z-index: 10;
		transform: scale(90%);
		width: 100%;
		height: 100%;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		transition: all 0.5s ease;
	}
}
.zoom {
	transform: scale(180%) translateY(#{randomNum(10, 20)}+ "%")
		rotate(#{randomNum(-5, 5)}+ "deg") !important;
}
</style>
