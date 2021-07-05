<template>
	<div class="checkout">
		<h1>Checkout</h1>
		<div class="abc"></div>
	</div>
</template>
<script>
export default {
	name: "Checkout",
};
</script>
<style scoped>
.checkout {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1 {
	color: rgb(243, 131, 26);
	font-size: 50px;
	margin-top: 50px;
}

.abc {
	height: 300px;
}
</style>
