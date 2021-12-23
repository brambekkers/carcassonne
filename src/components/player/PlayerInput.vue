<template>
	<div class="playerInput">
		<Badge
			class="input-badge"
			:badge="player.badge"
			:size="100"
			:background="player.color"
			:zoom="true"
		/>
		<div class="input-container">
			<div class="background" />
			<span class="close" @click="removePlayer(player)">
				<button class="close-img btn-transparant" />
			</span>
			<span class="playerType" @click="changeType(player)">
				<i class="fas fa-robot" v-if="player.type === 'cpu'" />
				<i class="fas fa-user" v-if="player.type === 'person'" />
			</span>
			<input type="text" v-model="player.name" />
			<div class="color">
				Color
				<span class="colorPicker" :style="colorStyles" @click="changeColor(player)" />
			</div>
		</div>
	</div>
</template>

<script>
	import Badge from "@/components/player/Badge.vue";
	import { mapActions } from "vuex";

	export default {
		props: ["player"],
		components: { Badge },
		methods: {
			...mapActions(["removePlayer", "changeColor", "changeType"])
		},
		computed: {
			colorStyles() {
				return {
					background: this.player.color
				};
			}
		}
	};
</script>

<style lang="scss" scoped>
</style>
