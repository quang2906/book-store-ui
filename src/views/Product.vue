<template>
	<div class="container">
		<div class="sidebar">
			<div class="categories">
				<h3>Category</h3>
				<select @change="findProductByCategory">
					<option value="">All</option>
					<option value="1">Sedan</option>
					<option value="2">Coupe</option>
					<option value="3">Sport Car</option>
					<option value="4">SUV</option>
					<option value="5">Pick-up</option>
				</select>
			</div>
		</div>
		<div class="list-product">
			<div class="filter">
				<span class="filter-item">
					<select @change="sortProduct">
						<option disabled selected>Sort</option>
						<option value="Price: Low to High">Price: Low to High</option>
						<option value="Price: High to Low">Price: High to Low</option>
						<option value="Name: A - Z">Name: A - Z</option>
						<option value="Name: Z - A">Name: Z - A</option>
					</select>
				</span>
				<span class="filter-item">
					<input type="text" placeholder="Search" v-model="searchQuery" @keyup.enter="search" />
				</span>
				<span class="filter-item">
					<button @click="search">Search</button>
				</span>
			</div>

			<div class="row" v-if="productSearchs.length > 0">
				<div class="block" v-for="product in productSearchs" :key="product.id">
					<router-link :to="'/product/' + product.id"
						><img :src="product.image[0].url" :alt="'This is ' + product.name"
					/></router-link>
					<router-link :to="'/product/' + product.id"
						><h4>{{ product.name }}</h4></router-link
					>
					<div class="price" v-if="product.isSales">
						<p class="price-promo">${{ format(product.price) }}</p>
						<!-- <p>${{ format(product.price_promo) }}</p> -->
					</div>
					<div class="price" v-else>
						<p>${{ format(product.price) }}</p>
					</div>
					<button class="add-to-cart" @click="addToCart">Add to cart</button>
				</div>
			</div>
			<div class="row" v-else>
				<h3 class="no-result">!!! No result !!!</h3>
			</div>
		</div>
	</div>
</template>

<script>
// import axios from "axios";
export default {
	name: "Product",

	props: {
		searchText: String,
	},
	data() {
		return {
			msg: "...",
			searchQuery: "",
			productSearchs: [],
		};
	},
	computed: {
		products() {
			return this.$store.state.products;
		},
	},

	methods: {
		doSth() {
			this.$router.push({ path: "/product/1" });
		},
		totalOfPromotionalProduct() {
			const promotionalProduct = this.products.filter((product) => product.promo);
			return promotionalProduct.length;
		},
		totalPriceOfProduct() {
			let sum = 0;
			this.products.forEach((product) => {
				sum += product.price;
			});
			return sum;
		},
		avgPriceOfProduct() {
			return (this.totalPriceOfProduct() / this.products.length).toFixed(2);
		},
		sortProduct(event) {
			this.msg = event.target.value;
			if (event.target.value === "Name: A - Z") {
				this.products = this.sortByName(this.products, "ASC");
				this.productSearchs = this.sortByName(this.productSearchs, "ASC");
			}
			if (event.target.value === "Name: Z - A") {
				this.products = this.sortByName(this.products, "DESC");
				this.productSearchs = this.sortByName(this.productSearchs, "DESC");
			}
			if (event.target.value === "Price: Low to High") {
				this.products = this.sortByPrice(this.products, "ASC");
				this.productSearchs = this.sortByPrice(this.productSearchs, "ASC");
			}
			if (event.target.value === "Price: High to Low") {
				this.products = this.sortByPrice(this.products, "DESC");
				this.productSearchs = this.sortByPrice(this.productSearchs, "DESC");
			}
		},
		sortByName(obj, typeCompare) {
			if (typeCompare === "ASC") {
				obj.sort(function(a, b) {
					return a.name.localeCompare(b.name);
				});
				return obj;
			} else {
				obj.sort(function(a, b) {
					return b.name.localeCompare(a.name);
				});
				return obj;
			}
		},
		sortByPrice(obj, typeCompare) {
			if (typeCompare === "ASC") {
				obj.sort(function(a, b) {
					return a.price - b.price;
				});
				return obj;
			} else {
				obj.sort(function(a, b) {
					return b.price - a.price;
				});
				return obj;
			}
		},
		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
		search() {
			this.productSearchs = [];

			this.products.forEach((product) => {
				if (product.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
					this.productSearchs.push(product);
				}
			});

			if (this.searchQuery.length === 0) {
				this.productSearchs = this.products;
				this.results = false;
			}
		},
		findProductByCategory(event) {
			let category = Number(event.target.value);
			console.log(category);
			this.productSearchs = this.products.filter((product) => product.categoryId === category);
			console.log(this.productSearchs);

			if (event.target.value == "") {
				this.productSearchs = this.products;
			}
		},
	},
	created() {
		this.$store.dispatch("getProducts").then((data) => {
			this.productSearchs = data;
		});
	},
	// async created() {
	// 	// const response = await fetch('https://fake-rest-api-nodejs.herokuapp.com/products');
	// 	// this.products = await response.json();

	// 	axios.get("http://localhost:3000/api/v1/products").then((response) => {
	// 		this.products = response.data;
	// 		this.productSearchs = this.products.slice();
	// 		console.log(this.productSearchs);
	// 	});
	// },
	// mounted() {
	// 	this.productSearchs = this.products.slice();
	// },
};
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	color: #333;
}

.container {
	display: flex;
	margin: 120px 5% 100px;
}

.sidebar {
	width: 10%;
	margin-top: 70px;
}

.categories select {
	height: 40px;
	width: 150px;
}

.categories h3 {
	color: rgb(247, 67, 46);
	margin-bottom: 8px;
}

.list-product {
	width: 90%;
}

.dropdown {
	display: flex;
	justify-content: center;
}

.dropdown-item {
	margin: 5px;
}

.row {
	margin-bottom: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.no-result {
	color: rgb(248, 149, 149);
	margin-top: 20px;
}

.block {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 240px;
	height: 300px;
	background: #f2f2f2;
	border-radius: 5px;
	margin: 30px;
}

.block:hover {
	transform: scale(1.1);
	transition: 0.3s;
}

.block img {
	padding-top: 15px;
	width: 70%;
}

a {
	text-decoration: none;
	display: flex;
	justify-content: center;
}

.block .add-to-cart {
	width: 70%;
	height: 30px;
	border-radius: 5px;
	border: 2px solid rgb(245, 115, 115);
	color: red;
}

.block .add-to-cart:hover {
	background-color: red;
	color: #fff;
	border: 2px solid red;
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

.filter {
	display: flex;
	justify-content: center;
}

.filter-item {
	margin: 5px;
}

.filter-item input,
.filter-item select,
.filter-item button {
	height: 30px;
}
</style>
