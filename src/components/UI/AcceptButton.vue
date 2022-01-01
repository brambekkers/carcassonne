<template>
	<div id="tilesInfoContainer">
		<div id="cardInfo">
			<div class="background" />
		</div>
		<div id="bigRoundContainer">
			<div id="acceptButton" @click="accept" v-if="nextTilePlaced">
				<i class="fas fa-check"></i>
			</div>
			<div id="ghostButton" @click="accept" v-else>
				<Tile :tile="nextTile" v-if="nextTile" />
			</div>
		</div>
		<div id="smallRoundContainer" v-if="nextTilePlaced">
			<div id="declineButton" @click="decline">
				<i class="fas fa-times"></i>
			</div>
		</div>
	</div>
</template>

<script>
import Tile from "@/components/board/Tile.vue";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
	components: { Tile },
	computed: {
		...mapGetters(["gameState", "nextTile", "nextTilePlaced"]),
	},
	methods: {
		...mapActions(["resetGhostTile", "placeTile"]),
		async accept() {
			if (this.gameState === "tile") {
				await this.placeTile();
				await this.resetGhostTile();
				this.$store.commit("gameState", "meeple");
			}
		},
		async decline() {
			if (this.gameState === "tile") {
				this.resetGhostTile();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
#tilesInfoContainer {
	position: absolute;
	bottom: 1rem;
	right: 1rem;

	#bigRoundContainer,
	#smallRoundContainer {
		border-radius: 50%;
		background: url("@/assets/UI/wood-texture.jpg");
		background-size: cover !important;
		background-position: center !important;
		box-shadow: 0 1px 2px #fff, 4px -1px 2px rgb(0 0 0 / 40%),
			inset 0 -5px 1px rgb(0 0 0 / 50%), inset 0 7px 2px rgb(255 255 255 / 51%);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.4 ease-in-out;

		#acceptButton,
		#declineButton,
		#ghostButton {
			border-radius: 50%;
			box-shadow: 0 1px 2px #fff, 4px -1px 2px rgb(0 0 0 / 40%),
				inset 0 -5px 1px rgb(0 0 0 / 50%), inset 0 7px 2px rgb(255 255 255 / 51%),
				inset 0 0 18px 0 rgb(255 255 255 / 40%), inset 0 0 24px 0 rgb(0 0 0 / 40%),
				inset 0 0 36px 6px rgb(0 0 0 / 5%), inset 7px 0px 10px 0 rgb(0 0 0 / 25%);
			display: flex;
			justify-content: center;
			align-items: center;
			border: 3px solid rgb(255 255 255 / 0%) !important;
			pointer-events: auto;
		}
	}

	#bigRoundContainer {
		position: absolute;
		z-index: 50;
		right: 0;
		bottom: 0;
		width: 200px;
		height: 200px;

		#acceptButton,
		#ghostButton {
			width: 170px;
			height: 170px;
		}
		#acceptButton {
			background-color: #273802;

			cursor: pointer;
			i {
				font-size: 120px;
				color: #6f922b;
			}

			&:hover {
				border: 3px solid rgb(255 255 255 / 51%) !important;
			}
		}

		#ghostButton {
			background-color: #191c27;

			div {
				height: 90px;
				width: 90px;
				box-shadow: 0 1px 2px #fff, 4px -1px 2px rgb(0 0 0 / 40%);
			}
		}
	}

	#cardInfo {
		z-index: 49;
		position: absolute;
		bottom: 30px;
		right: 140px;
		height: 130px;
		width: 300px;
		padding: 10px 50px;
		pointer-events: auto;
		transition: all 0.4s ease-in-out;

		.background {
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			height: 100%;
			width: 100%;
			transform: skew(-15deg);
			background: url("@/assets/UI/wood-texture.jpg");
			background-size: cover !important;
			background-position: bottom !important;
			box-shadow: 0 1px 2px #fff, 4px -1px 2px rgb(0 0 0 / 40%),
				inset 0 -5px 1px rgb(0 0 0 / 50%), inset 0 7px 2px rgb(255 255 255 / 51%);
		}
	}

	#smallRoundContainer {
		position: absolute;
		z-index: 49;
		right: 141px;
		bottom: 137px;
		width: 100px;
		height: 100px;

		#declineButton {
			width: 80px;
			height: 80px;
			background-color: #55200d;

			cursor: pointer;
			i {
				font-size: 40px;
				color: #90230c;
			}

			&:hover {
				border: 3px solid rgb(255 255 255 / 51%) !important;
			}
		}
	}

	#cardInfo {
		z-index: 49;
		position: absolute;
		bottom: 30px;
		right: 140px;
		height: 130px;
		width: 300px;
		padding: 10px 50px;
		pointer-events: auto;
		transition: all 0.4s ease-in-out;

		.background {
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			height: 100%;
			width: 100%;
			transform: skew(-15deg);
			background: url("@/assets/UI/wood-texture.jpg");
			background-size: cover !important;
			background-position: bottom !important;
			box-shadow: 0 1px 2px #fff, 4px -1px 2px rgb(0 0 0 / 40%),
				inset 0 -5px 1px rgb(0 0 0 / 50%), inset 0 7px 2px rgb(255 255 255 / 51%);
		}
	}
}
</style>
