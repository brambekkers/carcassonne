<template>
	<aside id="sidepanel" :class="{ open: open }">
		<div class="tabs">
			<div class="tab" @click="toggleMenu('menu')">
				<i class="fal fa-compass" />
				<div class="hint">Menu</div>
			</div>
			<div class="tab" @click="toggleMenu('logs')">
				<i class="fal fa-user-friends" />
				<div class="hint">Player stats</div>
			</div>
			<div class="tab" @click="toggleMenu('debug')">
				<i class="fal fa-tools" />

				<div class="hint">Debug info</div>
			</div>
		</div>

		<div class="sidebar_inner">
			<GameLogs v-if="menu === 'logs'" />
			<Debug v-else-if="menu === 'debug'" />
		</div>
	</aside>
	<div
		class="panel_mask"
		@click.prevent="open = false"
		:class="{ open: open }"
	/>
</template>

<script>
import GameLogs from "@/components/GameLogs.vue";
import Debug from "@/components/Debug.vue";
export default {
	data() {
		return {
			open: false,
			menu: "menu",
		};
	},
	components: { Debug, GameLogs },
	methods: {
		toggleMenu(type) {
			this.open = !this.open;
			if (this.open) this.menu = type;
		},
	},
};
</script>

<style></style>
