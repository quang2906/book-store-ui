<template>
	<Header />
	<div class="view"></div>
	<router-view />
	<Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
	components: {
		Header,
		Footer,
	},
	name: "App",
	component: {},
};
</script>

<style>
.view {
	margin-bottom: 80px;
}
</style>
