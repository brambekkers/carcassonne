<template>
	<CardSM>
		<div class="container">
			<h5 class="card-title">Game logs</h5>
			<hr />
			<div class="log" v-for="log of logs">
				<h3 class="title">
					{{ log.action }}
				</h3>
				<span class="time">
					<i class="fal fa-clock"></i>
					{{
						log.time.toLocaleTimeString("nl", {
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
						})
					}}</span
				>
				<p>{{ log.msg }}</p>
			</div>
		</div>
	</CardSM>
</template>

<script>
import { mapGetters } from "vuex";
import CardSM from "@/components/base/Card-sm.vue";

export default {
	data() {
		return {};
	},
	components: { CardSM },
	computed: {
		...mapGetters(["logs"]),
	},
};
</script>

<style lang="scss" scoped>
.container {
	padding: 0 0.5rem;
}
</style>
