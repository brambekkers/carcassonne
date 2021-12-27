<template>
	<div class="meeple" />
</template>

<script>
	export default {
		props: ["color"]
	};
</script>

<style lang="scss" scoped>
	.meeple {
		width: 100%;
		height: 100%;
		background: url("@/assets/meeple/meeple.svg");
		background-size: cover;
	}
</style>>