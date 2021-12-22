<template>
	<div class="badge" :style="badgeStyles">
		<div class="badge-img" :style="imageStyles" :class="{zoom : zoom}" />
	</div>
</template>

<script>
	export default {
		props: ["badge", "size", "zoom", "background"],
		computed: {
			badgeStyles() {
				return {
					background: this.background || "",
					width: `${this.size}px`,
					height: `${this.size}px`
				};
			},
			imageStyles() {
				return {
					backgroundImage: `url('/${this.badge.src}')`
				};
			}
		}
	};
</script>

<style lang="scss" scoped>
	@function randomNum($min, $max) {
		$rand: random();
		$randomNum: $min + floor($rand * (($max - $min) + 1));

		@return $randomNum;
	}
	.badge {
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

		.badge-img {
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
		transform: scale(150%) translateY(#{randomNum(10, 20)}+ "%")
			rotate(#{randomNum(-20, 20)}+ "deg") !important;
	}
</style>
