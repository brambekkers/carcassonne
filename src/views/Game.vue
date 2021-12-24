<template>
	<Board />
</template>

<script>
import Board from "@/components/Board.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: { Board },
	computed: {
		...mapGetters(["players"]),
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

<style></style>
