<template>
	<div class="checkout">
		<div class="checkout-title">
			<h2>Checkout</h2>
		</div>

		<div class="row">
			<div class="col-75">
				<div class="container">
					<form>
						<div class="row">
							<div class="col-50">
								<h3>Billing Address</h3>
								<label for="fname"><i class="fa fa-user"></i> Full Name</label>
								<input type="text" id="fname" name="firstname" placeholder="Vu Minh Quang" />
								<label for="email"><i class="fa fa-envelope"></i> Email</label>
								<input type="text" id="email" name="email" placeholder="quang@ocg.com" />
								<label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
								<input
									type="text"
									id="adr"
									name="address"
									placeholder="130 Trung Phung, Dong Da, HN"
								/>
								<label for="phone"
									><i class="fa fa-phone-square" aria-hidden="true"></i> Phone Number</label
								>
								<input type="text" id="phone" name="phone" placeholder="0123456789" />
							</div>

							<div class="col-50">
								<h3>Payment</h3>
								<label for="fname">Accepted Cards</label>
								<div class="icon-container">
									<i class="fa fa-cc-visa" style="color:navy;"></i>
									<i class="fa fa-cc-amex" style="color:blue;"></i>
									<i class="fa fa-cc-mastercard" style="color:red;"></i>
									<i class="fa fa-cc-discover" style="color:orange;"></i>
								</div>
								<label for="cname">Name on Card</label>
								<input type="text" id="cname" name="cardname" placeholder="Vu Minh Quang" />
								<label for="ccnum">Card number</label>
								<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
								<div class="row">
									<div class="col-50">
										<label for="expyear">Exp Year</label>
										<input type="text" id="expyear" name="expyear" placeholder="2018" />
									</div>
									<div class="col-50">
										<label for="cvv">CVV</label>
										<input type="text" id="cvv" name="cvv" placeholder="352" />
									</div>
								</div>
							</div>
						</div>
						<label>
							<input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as
							billing
						</label>
						<input type="submit" value="Continue to checkout" class="btn" />
					</form>
				</div>
			</div>
			<div class="col-25">
				<div class="container">
					<h4>
						Cart
						<span class="price" style="color:black"
							><i class="fa fa-shopping-cart"></i> <b>{{ getTotalProduct }}</b></span
						>
					</h4>
					<div class="cart">
						<div class="cart-item" v-for="item in cart" :key="item.payload.id">
							<p>
								{{ item.payload.name }}
								<span class="price">${{ item.payload.price * item.payload.quantity }}</span>
							</p>
						</div>
					</div>

					<hr />
					<p>
						Total
						<span class="price" style="color:black"
							><b>${{ getTotalAmount }}</b></span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Checkout",
	computed: {
		cart() {
			return this.$store.state.cart.items;
		},
		getTotalAmount() {
			let total = 0;
			for (let item of this.cart) {
				total += item.payload.quantity * item.payload.price;
			}
			return total;
		},
		getTotalProduct() {
			let total = 0;
			for (let item of this.cart) {
				total += item.payload.quantity;
			}
			return total;
		},
	},
};
</script>
<style scoped>
* {
	box-sizing: border-box;
}

.checkout {
	font-family: Arial;
	font-size: 17px;
	padding: 4% 10%;
}

.row {
	display: -ms-flexbox; /* IE10 */
	display: flex;
	-ms-flex-wrap: wrap; /* IE10 */
	flex-wrap: wrap;
	margin: 0 -16px;
}

.checkout-title {
	display: flex;
	justify-content: center;
}

.col-25 {
	-ms-flex: 25%; /* IE10 */
	flex: 25%;
}

.col-50 {
	-ms-flex: 50%; /* IE10 */
	flex: 50%;
}

.col-75 {
	-ms-flex: 75%; /* IE10 */
	flex: 75%;
}

.col-25,
.col-50,
.col-75 {
	padding: 0 16px;
}

.container {
	background-color: #f2f2f2;
	padding: 5px 20px 15px 20px;
	border: 1px solid lightgrey;
	border-radius: 3px;
}

input[type="text"] {
	width: 100%;
	margin-bottom: 20px;
	padding: 12px;
	border: 1px solid #ccc;
	border-radius: 3px;
}

label {
	margin-bottom: 10px;
	display: block;
}

.icon-container {
	margin-bottom: 20px;
	padding: 7px 0;
	font-size: 24px;
}

.btn {
	background-color: #04aa6d;
	color: white;
	padding: 12px;
	margin: 10px 0;
	border: none;
	width: 100%;
	border-radius: 3px;
	cursor: pointer;
	font-size: 17px;
}

.btn:hover {
	background-color: #45a049;
}

a {
	color: #2196f3;
}

hr {
	border: 1px solid lightgrey;
}

span.price {
	float: right;
	color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
	.row {
		flex-direction: column-reverse;
	}
	.col-25 {
		margin-bottom: 20px;
	}
}
</style>
