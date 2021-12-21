<template>
	<div class="badge" :style="badgeStyles"></div>
</template>

<script>
export default {
	props: ["badge"],
	computed: {
		badgeStyles() {
			return {
				backgroundImage: `url('/${this.badge.src}')`,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.badge {
	background: #f8eebc;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
