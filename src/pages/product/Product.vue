<template>
	<div class="container">
		<div class="sidebar">
			<div class="categories">
				<h3>Category</h3>
				<div class="category" v-for="category in categories" :key="category.id">
					<a href="#" tabindex="1" @click="getProductsByCategory(category.id)">{{
						category.name
					}}</a>
				</div>
			</div>
		</div>
		<div class="list-product">
			<div class="filter">
				<span class="filter-item">
					<select @change="sortProduct">
						<option disabled selected>Sort</option>
						<option value="priceasc">Price: Low to High</option>
						<option value="pricedesc">Price: High to Low</option>
						<option value="nameasc">Name: A - Z</option>
						<option value="namedesc">Name: Z - A</option>
					</select>
				</span>
				<span class="filter-item">
					<input
						type="text"
						placeholder="Search"
						v-model="searchQuery"
						@keyup.enter="searchProduct"
					/>
				</span>
				<span class="filter-item">
					<button @click="searchProduct">Search</button>
				</span>
			</div>

			<div v-if="products.length > 0">
				<div class="row">
					<div class="block" v-for="product in products" :key="product.id">
						<router-link :to="'/product/' + product.id"
							><img :src="product.image[0].url" :alt="'This is ' + product.name"
						/></router-link>
						<router-link :to="'/product/' + product.id"
							><h4>{{ product.name }}</h4></router-link
						>
						<div class="price" v-if="product.is_sale">
							<p class="price-promo">${{ format(product.price) }}</p>
							<p>${{ format(product.price_sale) }}</p>
						</div>
						<div class="price" v-else>
							<p>${{ format(product.price) }}</p>
						</div>
						<router-link :to="'/product/' + product.id" class="view-detail">View</router-link>
					</div>
				</div>
				<div class="pagination">
					<a href="#" @click="changePage(pageIndex - 1, $event)">«</a>
					<div class="page">
						<a href="#" @click="changePage(page, $event)" v-for="page in totalPages" :key="page">
							{{ page }}
						</a>
					</div>

					<a href="#" @click="changePage(pageIndex + 1, $event)">»</a>
				</div>
			</div>

			<div class="row" v-else>
				<h3 class="no-result">!!! No result !!!</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Product",
	data() {
		return {
			searchQuery: "",
			sort: "",
			page: 1,
		};
	},
	computed: {
		products() {
			return this.$store.state.product.products;
		},
		categories() {
			return this.$store.state.product.categories;
		},
		totalProducts() {
			return this.$store.state.product.totalProducts;
		},
		totalPages() {
			return this.$store.state.product.totalPages;
		},
		pageIndex() {
			return this.$store.state.product.pageIndex;
		},
	},

	methods: {
		format(number) {
			number = new Intl.NumberFormat().format(number);
			return number;
		},
		changePage(page) {
			this.page = page;
			if (this.sort == "") {
				this.$store.dispatch("getProducts", { search: this.searchQuery, pageIndex: this.page })
					.product;
			} else {
				this.$store.dispatch("sortProducts", { sort: this.sort, pageIndex: this.page }).product;
			}
		},
		searchProduct() {
			this.sort = "";
			this.page = 1;
			this.$store.dispatch("getProducts", { search: this.searchQuery, pageIndex: this.page })
				.product;
		},
		sortProduct(event) {
			this.searchQuery = "";
			this.page = 1;
			this.sort = event.target.value;
			this.$store.dispatch("sortProducts", { sort: this.sort, pageIndex: this.page }).product;
		},
		getProductsByCategory(id) {
			this.$store.dispatch("getProductsByCategory", { id }).product;
		},
	},
	created() {
		this.$store.dispatch("getProducts", { search: "" }).product;
		this.$store.dispatch("getCategories").product;
	},
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
	width: 20%;
	margin-top: 70px;
}

.categories select {
	height: 40px;
	width: 150px;
}

.categories h3 {
	color: rgb(11, 0, 172);
	margin-bottom: 8px;
}

.list-product {
	width: 80%;
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
	color: rgb(250, 48, 48);
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
	transition: 0.3s;
}

.block:hover {
	transform: scale(1.1);
}

.block img {
	padding-top: 15px;
	width: 70%;
}

.pagination a,
.block a {
	text-decoration: none;
	display: flex;
	justify-content: center;
}

.block .view-detail {
	width: 70%;
	height: 30px;
	padding-top: 5px;
	border-radius: 5px;
	border: 2px solid rgb(245, 156, 115);
	color: #f7432e;
}

.block .view-detail:hover {
	background-color: #f7432e;
	color: #fff;
	border: 2px solid #f7432e;
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

.pagination {
	display: flex;
	justify-content: center;
	margin: 20px 0;
}

.page {
	display: flex;
}

.page a {
	margin: 0 10px;
	border: 1px solid black;
	border-radius: 10%;
}

.category {
	font-size: 17px;
	font-family: Montserrat-Regular;

	line-height: 1.8;
}

.category a {
	text-decoration: none;
	color: #888888;
}

.category a:active {
	color: #f7432e;
}

.category a[tabindex]:focus {
	color: #f7432e;
}
</style>
