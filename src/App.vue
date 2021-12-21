<template>
	<Sidepanel v-if="haseSidepanel" />
	<router-view />
</template>

<script>
import Sidepanel from "@/components/Sidepanel.vue";
export default {
	components: { Sidepanel },
	computed: {
		haseSidepanel() {
			console.log(this.$route);
			return this.$route.meta.sidepanel;
		},
	},
};
</script>
