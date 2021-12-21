<template>
	<div class="container">
		<Card>
			<h1 class="card-title">Add players</h1>

			<div class="badgeContainer">
				<Badge v-for="badge of playerBadges" :badge="badge" />
			</div>
		</Card>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import Card from "@/components/base/Card.vue";
import Badge from "@/components/player/Badge.vue";
export default {
	components: { Card, Badge },
	computed: {
		...mapGetters(["playerBadges"]),
	},
};
</script>

<style lang="scss" scoped>
.container {
	background: #070301;
	padding: 1rem;
	height: 100vh;

	.badgeContainer {
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
