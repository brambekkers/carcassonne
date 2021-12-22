<template>
	<div class="badgePicker">
		<Badge :badge="badge" v-for="badge of playerBadges" :size="200" @click="addPlayer({badge})" />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";

	import Badge from "@/components/player/Badge.vue";
	export default {
		components: { Badge },
		computed: {
			...mapGetters(["playerBadges"])
		},
		methods: {
			...mapActions(["addPlayer"])
		}
	};
</script>

<style lang="scss" scoped>
	.badgePicker {
		padding: 2rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		max-height: 65vh;
		overflow-y: scroll;
		gap: 1rem;
	}
</style>
