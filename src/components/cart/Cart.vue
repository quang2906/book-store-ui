<template>
	<div class="shopping-cart">
		<h1>Shopping Cart</h1>
		<div class="count-product">{{ itemCount }} items in your cart</div>
		<hr />
		<div>
			<div class="item" v-for="(product, index) in products" :key="product.id">
				<div class="product">
					<div class="product">
						<a href="#"><img :src="product.image"/></a>
						<div class="product-info">
							<a href="#"
								><h3>{{ product.name }}</h3></a
							>
							<h3>${{ format(product.price) }}</h3>
						</div>
					</div>
					<div class="product">
						<input
							type="number"
							:value="product.quantity"
							@input="updateQuantity(index, $event)"
							@blur="checkQuantity(index, $event)"
						/>
						<button @click="openModal(product.id)">X</button>
					</div>
				</div>
				<hr />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cart",
	data() {
		return {
			discountPrice: 0,
			productClones: [],
			isOpenModal: false,
			idProduct: 0,
			products: [
				{
					id: 1,
					name: "SamSung Galaxy S20+",
					image: require("@/assets/SamsungGalaxyS20+.png"),
					price: 1090,
					des: "This is SamSung Galaxy S20+",
					quantity: 2,
				},
				{
					id: 2,
					name: "Iphone 12 Pro Max",
					image: require("@/assets/Iphone12ProMax.png"),
					price: 1500,
					des: "This is Iphone 12 ProMax",
					quantity: 5,
				},
			],
		};
	},
	computed: {
		itemCount() {
			let count = 0;
			for (let i = 0; i < this.products.length; i++) {
				count += this.products[i].quantity || 0;
			}
			return count;
		},
		subTotal() {
			let subTotal = 0;
			for (let i = 0; i < this.products.length; i++) {
				subTotal += this.products[i].quantity * this.products[i].price;
			}
			return subTotal;
		},
		totalTax() {
			return (this.subTotal * 10) / 100;
		},
		totalPrice() {
			return this.subTotal - this.discountPrice + this.totalTax;
		},
	},
	methods: {
		discount(discountPrice) {
			this.discountPrice = discountPrice;
		},
		updateQuantity: function(index, event) {
			let product = this.products[index];
			let value = event.target.value;

			if (value === "") {
				product.quantity = value;
			} else if (value < 1) {
				product.quantity = 1;
			} else if (String(value).length <= 2) {
				product.quantity = parseInt(value, 10);
			}
			this.$forceUpdate();
		},
		checkQuantity(index, event) {
			if (event.target.value === "") {
				let product = this.products[index];
				product.quantity = 1;
			}
		},
		openModal(idProduct) {
			this.isOpenModal = true;
			this.idProduct = idProduct;
		},
		remove(confirm) {
			if (confirm) {
				this.products = this.products.filter((product) => product.id !== this.idProduct);
			}
			this.isOpenModal = false;
		},
		returnShopping() {
			this.products = this.productClones.slice();
		},
		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
	},
	created() {
		this.productClones = this.products.slice();
	},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.shopping-cart {
	padding: 20px 10%;
	margin: 50px 10%;
	background-color: #eee;
}

.count-product {
	text-align: right;
}

.product {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.product-info {
	margin-left: 30px;
}

img {
	max-width: 100px;
	height: auto;
}

a {
	text-decoration: none;
}

input {
	height: 40px;
	width: 80px;
	margin-right: 30px;
	padding-left: 32px;
	border-radius: 10px;
	border: 1px solid black;
}

input:focus {
	outline: none;
}

button {
	height: 40px;
	width: 70px;
	border-radius: 10px;
	border: 1px solid black;
}

button:hover {
	border: 2px solid red;
	color: red;
}

.empty-cart {
	text-align: center;
}

.empty-cart button {
	width: 200px;
	background-color: #16cc9b;
	border: none;
	color: white;
	border-radius: 20px;
}

.empty-cart button:hover {
	background-color: #f58551;
}
</style>
