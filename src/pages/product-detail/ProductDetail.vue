<template>
	<div class="product-detail" v-if="product">
		<div class="product-image" v-if="product.image">
			<img :src="product.image[subImage].url" alt="" />
			<div class="sub-image">
				<div class="sub-image-item" v-for="(img, index) in product.image" :key="img.id">
					<button @click="changeImage($event, index)"><img :src="img.url" /></button>
				</div>
			</div>
		</div>
		<div class="product-info">
			<h1>{{ product.name }}</h1>
			<h2>
				<div class="price" v-if="product.is_sale">
					<p class="price-promo">${{ format(product.price) }}</p>
					<p>${{ format(product.price_sale) }}</p>
				</div>
				<div class="price" v-else>
					<p>${{ format(product.price) }}</p>
				</div>
			</h2>
			<div class="add-cart">
				<button class="btn-add" @click="minus">-</button>
				<input
					type="number"
					v-model="quantity"
					oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
					maxlength="2"
					@input="handleQuantityInput"
				/>
				<button class="btn-sub" @click="plus">+</button>
				<button class="add-to-cart" @click="addProductToCart">Add to cart</button>
			</div>
			<h3><b>Description:</b></h3>
			<p>{{ product.des }}</p>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import { API_DOMAIN } from "@/config";
export default {
	name: "ProductDetail",

	data() {
		return {
			product: {},
			quantity: 1,
			subImage: 0,
		};
	},
	computed: {
		cart() {
			return this.$store.state.cart.items;
		},
	},
	methods: {
		addToCart(payload) {
			this.$store.dispatch("addToCart", { payload }).cart;
		},
		changeQuantity(payload) {
			this.$store.dispatch("changeQuantity", { payload }).cart;
		},

		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
		changeImage(event, index) {
			this.subImage = index;
		},
		plus() {
			this.quantity++;
			if (this.quantity > 99) {
				this.quantity = 99;
			}
		},
		minus() {
			this.quantity--;
			if (this.quantity < 1) {
				this.quantity = 1;
			}
		},
		handleQuantityInput(e) {
			this.quantity = e.target.value;
			if (this.quantity <= 1) {
				this.quantity = 1;
				return;
			}
		},

		addProductToCart() {
			const cartItem = {
				id: this.product.id,
				name: this.product.name,
				image: this.product.image[0].url,
				price: this.product.price,
				quantity: this.quantity,
			};

			// Check if item is already in cart
			for (let item of this.cart) {
				if (item.payload.id === cartItem.id) {
					cartItem.quantity += item.payload.quantity;

					const payload = {
						index: this.cart.indexOf(item),
						quantity: cartItem.quantity,
					};

					this.changeQuantity(payload);
					console.log(JSON.stringify(this.cart));
					this.saveCartToLocal(); // Cache cart to localStorage
					return;
				}
			}
			this.addToCart(cartItem); // Add item to cart state
			console.log(JSON.stringify(this.cart));
			this.saveCartToLocal(); // Cache cart to localStorage
		},

		saveCartToLocal() {
			localStorage.setItem("cart", JSON.stringify(this.cart));
		},
	},
	async created() {
		const result = await axios.get(`${API_DOMAIN}/products/${this.$route.params.id}`);
		if (result.status == 200) {
			this.product = result.data;
		}
	},
};
</script>
<style scoped>
* {
	margin: 0;
	box-sizing: border-box;
}

.product-detail {
	margin: 110px 40px 40px;
	padding: 40px;
	display: flex;
	background-color: #eee;
}

.product-image {
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.product-image img {
	max-width: 50%;
	height: auto;
}

.sub-image {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}

.sub-image-item button {
	height: 60px;
	width: 60px;
	margin: 0 5px;
}

.sub-image img {
	max-width: 80%;
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

.price {
	display: flex;
}

.price p {
	margin: 0px 10px;
}

.price-promo {
	text-decoration: line-through;
	color: red;
}
</style>
