<template>
	<div class="badgePicker">
		<div class="container">
			<Badge :badge="badge" v-for="badge of playerBadges" :size="200" :canSelect="true" />
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import Badge from "@/components/player/Badge.vue";
	export default {
		components: { Badge },
		computed: {
			...mapGetters(["playerBadges"])
		}
	};
</script>

<style lang="scss" scoped>
	.badgePicker {
		position: relative;
		height: 68vh;
		flex-grow: 1;

		.container {
			padding: 2rem;

			position: absolute;
			display: flex;
			flex-wrap: wrap;
			overflow-y: scroll;
			justify-content: space-around;

			height: 100%;
			width: 100%;
			gap: 1rem;
		}
		&:before,
		&:after {
			content: "";

			position: absolute;
			z-index: 100;
			left: 0;
			pointer-events: none;
			width: 100%;
			height: 4rem;
		}

		&:before {
			top: 0;
			background-image: linear-gradient(
				to bottom,
				#f2e0c8,
				rgba(255, 255, 255, 0) 100%
			);
		}
		&:after {
			bottom: 0;
			background-image: linear-gradient(
				to bottom,
				rgba(255, 255, 255, 0),
				#f2e0c8 100%
			);
		}
	}
</style>
