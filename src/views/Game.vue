<template>
	<div :style="transform">
		<Board />
	</div>
	<GameUI />
</template>

<script>
import Board from "@/components/Board.vue";
import GameUI from "@/components/GameUI.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: { Board, GameUI },
	computed: {
		...mapGetters(["players", "perspective"]),
		perspectiveStyle() {
			return {
				perspective: `${this.perspective.perspective}px`,
			};
		},
		transform() {
			return {
				transform: `perspective(${this.perspective.perspective}px) rotateX(${this.perspective.rotateX}deg) rotateY(${this.perspective.rotateY}deg) rotateZ(${this.perspective.rotateZ}deg)`,
			};
		},
	},
	methods: {
		...mapActions(["newGame"]),
	},
	mounted() {
		if (!this.players?.length) {
			this.$router.push("/createplayers");
		}
	},
	created() {
		this.newGame();
	},
};
</script>
