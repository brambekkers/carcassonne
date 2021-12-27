<template>
	<div class="playerInput">
		<Badge
			class="input-badge"
			:badge="player.badge"
			:size="100"
			:background="player.color"
			:zoom="true"
		/>
		<div class="inputContainer" v-if="hasInput">
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
		<div class="playerStats" v-else>
			<div class="background" />
			<span class="playerName">{{player.name}}</span>
			<div class="stats">
				<div class="stat">
					<div class="icon">
						<Meeple class="meeple" :color="player.color" />
					</div>
					{{player.smallMeeples}}
				</div>
				<div class="stat">
					<div class="icon">
						<img class="diamonds" src="@/assets/UI/diamonds.png" />
					</div>
					{{player.points}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Meeple from "@/components/meeple/Meeple.vue";
	import Badge from "@/components/player/Badge.vue";
	import { mapActions, mapGetters } from "vuex";

	export default {
		props: ["player", "hasInput"],
		components: { Badge, Meeple },
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
