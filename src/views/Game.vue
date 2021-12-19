<template>
	<Board />
</template>

<script>
	import Board from "@/components/Board.vue";
	import { mapActions } from "vuex";

	export default {
		components: { Board },
		methods: {
			...mapActions(["newGame"])
		},
		created() {
			this.newGame();
		}
	};
</script>

<style>
</style>