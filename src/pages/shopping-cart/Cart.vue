<template>
	<div class="shopping-cart">
		<h1>Shopping Cart</h1>
		<div class="count-product">{{ totalItems }} items in your cart</div>
		<hr />
		<div v-if="cart.length > 0">
			<div class="item" v-for="item in cart" :key="item.payload.id">
				<div class="product">
					<div class="product">
						<a href="#"><img :src="item.payload.image"/></a>
						<div class="product-info">
							<a href="#"
								><h3>{{ item.payload.name }}</h3></a
							>
							<p>{{ item.payload.des }}</p>
							<h3>${{ format(item.payload.price) }}</h3>
						</div>
					</div>
					<div class="product">
						<div class="add-cart">
							<button class="btn-add" @click="minus(item)">-</button>
							<input
								type="number"
								:value="item.payload.quantity"
								oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
								maxlength="2"
								@input="handleQuantityInput($event, item)"
							/>
							<button class="btn-sub" @click="plus(item)">+</button>
						</div>
						<button @click="openModal(item)">X</button>
					</div>
				</div>
				<hr />
			</div>
			<CartTotal
				class="checkoutt"
				:subTotal="subTotal"
				:totalTax="totalTax"
				:totalAmount="totalAmount"
				@discount="discount"
			/>
		</div>

		<div class="empty-cart" v-else>
			<h3>Cart is empty</h3>
			<router-link to="/product"><button>Return shopping</button></router-link>
		</div>
	</div>

	<transition name="fade">
		<ConfirmDelete v-if="isOpenModal" @confirm="remove" />
	</transition>
</template>

<script>
import CartTotal from "@/pages/shopping-cart/CartTotal.vue";
import ConfirmDelete from "@/pages/shopping-cart/ConfirmDelete.vue";
export default {
	name: "Cart",
	components: { CartTotal, ConfirmDelete },
	data() {
		return {
			isOpenModal: false,
			idProduct: 0,
			tax: 10,
			itemRemove: {},
		};
	},
	computed: {
		cart() {
			return this.$store.state.cart.items;
		},
		totalItems() {
			let totalItems = 0;
			this.cart.forEach((item) => {
				totalItems += item.payload.quantity;
			});
			return totalItems;
		},
		subTotal() {
			let subTotal = 0;
			for (let i = 0; i < this.cart.length; i++) {
				subTotal += this.cart[i].payload.quantity * this.cart[i].payload.price;
			}
			return subTotal;
		},
		totalTax() {
			return (this.subTotal * this.tax) / 100;
		},
		totalAmount() {
			return this.subTotal + this.totalTax;
		},
	},
	methods: {
		changeQuantity(payload) {
			this.$store.dispatch("changeQuantity", { payload }).cart;
		},
		removeItem(index) {
			this.$store.dispatch("removeItem", { index }).cart;
		},
		plus(item) {
			let index = this.cart.indexOf(item);
			let quantity = item.payload.quantity + 1;

			if (quantity > 99) {
				quantity = 99;
			}
			const payload = {
				index: index,
				quantity: quantity,
			};
			this.changeQuantity(payload);
			localStorage.setItem("cart", JSON.stringify(this.cart));
		},
		minus(item) {
			let index = this.cart.indexOf(item);
			let quantity = item.payload.quantity - 1;

			if (quantity < 1) {
				quantity = 1;
			}
			const payload = {
				index: index,
				quantity: quantity,
			};
			this.changeQuantity(payload);
			localStorage.setItem("cart", JSON.stringify(this.cart));
		},
		handleQuantityInput(e, item) {
			let index = this.cart.indexOf(item);
			let quantity = e.target.value;
			if (quantity < 1) {
				quantity = 1;
			}
			if (quantity > 99) {
				quantity = 99;
			}
			const payload = {
				index: index,
				quantity: quantity,
			};
			this.changeQuantity(payload);
			localStorage.setItem("cart", JSON.stringify(this.cart));
		},

		openModal(item) {
			this.isOpenModal = true;
			this.itemRemove = item;
		},

		remove(confirm) {
			if (confirm) {
				const index = this.cart.indexOf(this.itemRemove);
				this.removeItem(index);
				localStorage.setItem("cart", JSON.stringify(this.cart));
			}
			this.isOpenModal = false;
		},

		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
	},
	created() {
		this.cart = JSON.parse(localStorage.getItem("cart")) || [];
	},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.shopping-cart {
	padding: 20px 10%;
	margin: 120px 10% 40px;
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

.checkoutt {
	margin-top: 30px;
}

.add-cart {
	margin: 40px;
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
