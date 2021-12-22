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
			<input type="text" v-model="player.name" />
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
		...mapActions(["removePlayer"]),
	},
};
</script>

<style lang="scss" scoped>
.playerInput {
	position: relative;
	margin: 0.3rem auto;

	.input-badge {
		position: relative;
		z-index: 50;
	}
	.input-container {
		z-index: 49;
		position: absolute;
		top: 10px;
		left: 55px;
		height: 80px;
		width: 270px;
		padding: 10px 50px;
		.background {
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			height: 100%;
			width: 100%;
			transform: skew(10deg);
			background: url("@/assets/UI/wood-texture.jpg");
			background-size: cover !important;
			background-position: bottom !important;
			box-shadow: 0 1px 2px #fff, 4px -1px 2px rgb(0 0 0 / 40%),
				inset 0 -5px 1px rgb(0 0 0 / 50%), inset 0 7px 2px rgb(255 255 255 / 51%);
		}

		.close {
			background: white;
			position: absolute;
			top: -10px;
			right: -10px;
			height: 40px;
			width: 40px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			border: solid 2px #bd8d4c;

			.close-img {
				height: 70%;
				width: 70%;
				background: url("@/assets/icons/cross.png");
				background-size: cover !important;
				background-position: center !important;
				cursor: pointer;
			}
		}

		input {
			margin-top: 5px;
			width: 200px;
		}
	}
}
</style>
