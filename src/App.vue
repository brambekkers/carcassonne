<template>
	<Debug />
	<router-view />
</template>

<script>
	import Debug from "@/components/Debug.vue";
	export default {
		components: { Debug }
	};
</script>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
