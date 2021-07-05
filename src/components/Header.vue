<template>
	<br />
	<div id="nav">
		<router-link to="/"><img class="logo" src="@/assets/logo2.png" alt="logo"/></router-link>
		<div class="menu">
			<router-link class="menu-item" to="/">Home</router-link>
			<router-link class="menu-item" to="/product">Product</router-link>
			<router-link class="menu-item" to="/about">About us</router-link>
			<router-link class="menu-item" to="/contact">Contact</router-link>
		</div>
		<div class="menu2">
			<!-- <div class="search">
				<form class="searchForm" @submit.prevent>
					<input type="text" placeholder="Search" v-model="searchQuery" />
					<span v-show="searchQuery" class="removeInput" @click="removeSearchQuery">+</span>
				</form>
				<button class="btn-search" @click="submitSearch">Search</button>
			</div> -->
			<div>
				<div class="login" v-if="isAuthenticated">
					<img class="icon" src="@/assets/icons/user.png" alt="user-icon" />
					<h4><button class="login_logout" @click="LoginOrLogout">Logout</button></h4>
				</div>
				<div class="login" v-else>
					<img class="icon" src="@/assets/icons/user.png" alt="user-icon" />
					<router-link to="/login"
						><h4>
							<button class="login_logout">Login</button>
						</h4></router-link
					>
				</div>
			</div>

			<router-link to="/cart"
				><img class="icon" src="@/assets/icons/cart.jpg" alt="cart-icon"
			/></router-link>
		</div>
	</div>
</template>
<script>
export default {
	name: "Header",
	data() {
		return {
			isResult: false,
			searchQuery: "",
			isCart: false,
		};
	},

	computed: {
		isAuthenticated() {
			return this.$store.state.auth.isAuthenticated;
		},
	},

	methods: {
		removeSearchQuery() {
			this.searchQuery = "";
			this.isResult = false;
		},
		LoginOrLogout() {
			this.$store.commit("TOGGLE_AUTH");
		},
	},
};
</script>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 30px auto;
	height: 100px;
	background-color: rgb(247, 67, 46);
}

#nav a {
	text-decoration: none;
	font-weight: bold;
	color: white;
	font-size: 20px;
}

#nav a.router-link-exact-active {
	color: rgb(9, 255, 0);
}

.logo {
	max-height: 60px;
	width: auto;
}

.menu .menu-item {
	margin: auto 20px;
}

.menu2 {
	display: flex;
}

.search {
	display: flex;
	align-items: center;
}

.search input {
	height: 30px;
}

.search button {
	height: 30px;
	width: 70px;
	margin-left: 5px;
	border-radius: 5px;
}

.login {
	display: flex;
	align-items: center;
	margin-left: 30px;
}

.icon {
	max-width: 40px;
	height: auto;
}

.login h4 {
	margin-left: 10px;
	margin-right: 40px;
	color: white;
}

.login_logout {
	height: 25px;
	width: 60px;
	border: none;
	border-radius: 10px;
}

.login_logout:hover {
	background: #a031eb;
	border: 1px solid #a031eb;
	color: #fff;
}

.searchForm {
	position: relative;
}

.removeInput {
	font-size: 28px;
	color: #f9a603;
	cursor: pointer;
	top: 0;
	right: 0;
	position: absolute;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
}

.raised-button {
	height: 30px;
	width: 70px;
	padding: 10px auto;
	display: inline-block;
	text-align: center;
	line-height: 1;
	cursor: pointer;
	-webkit-appearance: none;
	transition: all 0.25s ease-out;
	vertical-align: middle;
	border: 1px solid transparent;
	border-radius: 2px;
	font-size: 0.9rem;
	background: #f9a603;
	color: #fafafa;
}
.raised-button:hover,
.raised-button:focus {
	background: #e69903;
	color: #fff;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13), 0 1px 5px 0 rgba(0, 0, 0, 0.08);
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 500px) {
}
</style>
