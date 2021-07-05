<template>
	<div class="product-detail">
		<div class="product-image">
			<img :src="product.image[0].url" alt="" />
		</div>
		<div class="product-info">
			<h1>{{ product.name }}</h1>
			<h2>
				<b>${{ format(product.price) }}</b>
			</h2>
			<div class="add-cart">
				<button class="btn-add" @click="descQuantity">-</button>
				<input type="number" v-model="quantity" />
				<button class="btn-sub" @click="ascQuantity">+</button>
				<button class="add-to-cart" @click="addProductToCart">Add to cart</button>
			</div>
			<h3><b>Description:</b></h3>
			<p>I remember tears streaming down your face when I said I'll never let you go</p>
			<p>When all those shadows almost killed your light</p>
			<p>I remember you said don't leave me here alone</p>
			<p>But all that's dead and gone and passed tonight</p>
			<p>Just close your eyes, the sun is going down</p>
			<p>You'll be alright, no one can hurt you now</p>
			<p>Come morning light, you and I'll be safe and sound</p>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "ProductDetail",

	data() {
		return {
			quantity: 1,
		};
	},
	methods: {
		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
		ascQuantity() {
			this.quantity++;
		},
		descQuantity() {
			this.quantity--;
		},
		addProductToCart() {
			this.$store.dispatch("cart/addProductToCart", this.product);
		},
	},
	computed: mapState(["product"]),
	created() {
		this.$store.dispatch("getProductById", this.$route.params.id);
	},
};
</script>
<style scoped>
* {
	margin: 0;
	box-sizing: border-box;
}

.product-detail {
	margin: 40px;
	padding: 40px;
	display: flex;
	background-color: #eee;
}

.product-image {
	margin-right: 50px;
	width: 60%;
}

.product-image img {
	max-width: 100%;
	height: auto;
}

.product-info h1 {
	color: blue;
	margin-bottom: 10px;
}

.product-info h2 {
	color: black;
	text-decoration: none;
	margin-bottom: 10px;
}

.add-cart {
	margin: 40px auto;
}

.add-cart .btn-add {
	height: 30px;
	width: 40px;
	border-radius: 10px 0 0 10px;
	border: 2px solid #777777;
	background: #777777;
}

.add-cart .btn-sub {
	height: 30px;
	width: 40px;
	border-radius: 0 10px 10px 0;
	border: 2px solid #777777;
	background: #777777;
}

.btn-add:hover,
.btn-sub:hover {
	background: rgb(87, 87, 87);
	color: rgb(250, 171, 125);
}

.add-cart .add-to-cart {
	height: 30px;
	width: 150px;
	margin-left: 30px;
	border: 1px solid rgb(247, 67, 46);
	color: rgb(247, 67, 46);
}

.add-cart .add-to-cart:hover {
	background-color: rgb(247, 67, 46);
	color: #fff;
}

.add-cart input {
	height: 30px;
	width: 50px;
	text-align: center;
	border: 2px solid #777777;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
