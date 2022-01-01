<template>
	<div id="UI">
		<div class="playerlist">
			<PlayerBar :player="player" v-for="player of players" />
		</div>

		<AcceptButton />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import PlayerBar from "@/components/player/PlayerBar.vue";
import AcceptButton from "@/components/UI/AcceptButton.vue";

export default {
	components: { PlayerBar, AcceptButton },

	computed: {
		...mapGetters(["players"]),
	},
};
</script>

<style lang="scss" scoped>
#UI {
	z-index: 1000;
	position: relative;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;

	pointer-events: none;

	.playerlist {
		position: absolute;
		height: 100vh;
		left: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
}
</style>
