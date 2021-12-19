<template>
	<h3 id="debugMode">Debug mode on!</h3>
	<router-view />
</template>

<style lang="scss">
	body {
		margin: 0;
		padding: 0;
	}
	#debugMode {
		position: fixed;
		left: 1rem;
		top: 1rem;
		color: red;
	}
</style>
