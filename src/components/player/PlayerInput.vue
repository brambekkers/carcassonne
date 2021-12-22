<template>
	<div class="playerInput">
		<Badge :badge="player.badge" :size="100" :background="player.color" :zoom="true" />
	</div>
</template>

<script>
	import Badge from "@/components/player/Badge.vue";

	export default {
		props: ["player"],
		components: { Badge }
	};
</script>

<style>
</style>