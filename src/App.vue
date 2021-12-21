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
			return this.$route.meta.sidepanel;
		},
	},
};
</script>
