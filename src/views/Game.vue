<template>
	<div class="perspective">
		<div>
			<Board />
		</div>
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
			...mapGetters(["players"])
		},
		methods: {
			...mapActions(["newGame"])
		},
		mounted() {
			if (!this.players?.length) {
				this.$router.push("/createplayers");
			}
		},
		created() {
			this.newGame();
		}
	};
</script>


<style lang="scss" scoped>
	.perspective {
		perspective: 2000px;

		div {
			transform: rotateX(45deg);
		}
	}
</style>