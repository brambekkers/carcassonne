<template>
	<div class="container-fluid">
		<Card>
			<h1 class="h1 card-title">Options</h1>

			<div class="menu">
				<div class="buttons">
					<button class="btn btn-lg" @click="$router.push('/options/rules')">
						Rules
					</button>
					<button class="btn btn-lg" @click="$router.push('/options/tileamount')">
						Tile amount
					</button>
					<button class="btn btn-lg" @click="$router.push('/options/grapics')">
						Graphics
					</button>
					<button class="btn btn-lg" @click="$router.push('/options/sounds')">
						Sounds
					</button>
					<button class="btn btn-lg btn-dark" @click="$router.push('/')">
						Back
					</button>
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
		background-image: url("@/assets/UI/bg-horse.png");
		background-size: 25vw;
		background-repeat: no-repeat;
		background-position: right;
		background-position-x: 65vw;
		background-position-y: 15vh;

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
