<template>
	<div class="container-fluid">
		<Card>
			<div class="menu">
				<img class="logo" src="@/assets/splash@200pct.png" />
				<div class="buttons">
					<button class="btn btn-lg" @click="$router.push('/createplayers')">
						New Game
					</button>
					<button class="btn btn-lg" @click="$router.push('/options')">
						Options
					</button>
					<button class="btn btn-lg" @click="$router.push('/rules')">Rules</button>
					<button class="btn btn-lg btn-dark">Exit</button>
				</div>
			</div>
		</Card>
	</div>
</template>

<script>
import Card from "@/components/base/Card.vue";
export default {
	components: { Card },
};
</script>

<style lang="scss" scoped>
.container-fluid {
	background: #070301;
	padding: 1rem;
	height: 100vh;

	.menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		background-image: url("@/assets/UI/bg-card.jpg");
		background-size: 138vw;
		background-repeat: no-repeat;
		background-position-x: -4vw;
		background-position-y: -17vh;

		.logo {
			/* height: 100%; */
			width: 50%;
			object-fit: contain;

			margin: auto;
			flex-grow: 1;
		}

		.buttons {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex-grow: 4;
			gap: 12px;
		}
	}
}
</style>
