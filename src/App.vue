<template>
	<Sidepanel />

	<router-view />
</template>

<script>
import Sidepanel from "@/components/Sidepanel.vue";
export default {
	components: { Sidepanel },
};
</script>
