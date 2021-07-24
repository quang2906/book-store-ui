<template>
	<div class="container">
		<div class="promo">
			<p>Have A Promo Code?</p>
			<input type="text" id="promo-code" v-model="promoCode" />
			<button type="button" @click="checkPromoCode"><b>></b></button>
		</div>

		<div class="checkout">
			<ul>
				<li><b>Subtotal</b></li>
				<li v-if="discount != 0"><b>Discount</b></li>
				<li><b>Tax</b></li>
				<li class="total"><b>Total</b></li>
			</ul>
			<ul>
				<li>${{ format(subTotal) }}</li>
				<li v-if="discount != 0">${{ format(discountAmount) }}</li>
				<li>${{ format(totalTax) }}</li>
				<li class="total">${{ format(totalAmountAfterDiscount) }}</li>
			</ul>
			<router-link to="/checkout"><button type="button">Check Out</button></router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Checkout",
	props: {
		subTotal: Number,
		totalTax: Number,
		totalAmount: Number,
	},
	data() {
		return {
			promotions: [
				{ code: "QUANG", discount: "10%" },
				{ code: "QUANGCUTE", discount: "50%" },
				{ code: "QUANGDZ", discount: "90%" },
				{ code: "TRIXAUTRAI", discount: "100%" },
			],
			promoCode: "",
			discount: 0,
		};
	},
	computed: {
		discountAmount() {
			return (this.subTotal * this.discount) / 100;
		},
		totalAmountAfterDiscount() {
			return this.totalAmount - this.discountAmount;
		},
	},
	methods: {
		checkPromoCode() {
			for (let i = 0; i < this.promotions.length; i++) {
				if (this.promoCode === this.promotions[i].code) {
					this.discount = parseFloat(this.promotions[i].discount.replace("%", ""));
					this.$emit("discount", this.discountPrice);
					return;
				}
			}

			alert("Sorry, the Promotional code you entered is not valid!");
		},
		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
	},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.promo input {
	width: 200px;
	border: 2px solid #16cc9b;
	border-radius: 2rem 0 0 2rem;
	padding: 0.5rem 0 0.5rem 1.8rem;
	margin-right: 0;
}

.promo:hover input {
	border-color: #f58551;
}

.promo input:focus {
	outline: none;
}

.promo button {
	border-radius: 0 2rem 2rem 0;
	border: 2px solid #16cc9b;
	background: #16cc9b;
	color: white;
	width: 50px;
	height: 35px;
}

.promo:hover button {
	border-color: #f58551;
	background-color: #f58551;
}

.promo button:hover {
	padding-left: 15px;
}

.checkout {
	display: flex;
	align-items: center;
}

ul {
	list-style-type: none;
}

.checkout button {
	margin-left: 50px;
	width: 100px;
	height: 35px;
	background-color: #16cc9b;
	border: none;
	color: white;
	border-radius: 20px;
}

.checkout button:hover {
	background-color: #f58551;
}
</style>
