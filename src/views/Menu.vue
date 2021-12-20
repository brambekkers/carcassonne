<template>
	<div class="container">
		<Card />
	</div>
</template>

<script>
import Card from "@/components/base/Card.vue";
export default {
	components: { Card },
};
</script>

<style lang="scss" scoped>
.container {
	background: #070301;
	padding: 1rem;
	height: 100vh;
}
</style>
