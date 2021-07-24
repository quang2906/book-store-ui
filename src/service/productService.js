import axios from "axios";
import { API_DOMAIN } from "@/config.js";

export default {
	// async getProducts({ page, search }) {
	// 	return axios.get(`${API_DOMAIN}/products?name=${search}&page=${page}`).then((response) => {
	// 		return response.data;
	// 	});
	// },
	async getProducts({ page, search }) {
		return axios
			.get(`${API_DOMAIN}/products/search?name=${search}&page=${page}`)
			.then((response) => {
				const products = response.data.products.map((product) => {
					return product;
				});
				return {
					totalPages: response.data.total_page,
					totalProducts: response.data.total_product,
					pageIndex: response.data.page_index,
					products: products,
				};
			});
	},

	async sortProducts({ page, sort }) {
		return axios.get(`${API_DOMAIN}/products/sort?sort=${sort}&page=${page}`).then((response) => {
			const products = response.data.products.map((product) => {
				return product;
			});
			return {
				totalPages: response.data.total_page,
				totalProducts: response.data.total_product,
				pageIndex: response.data.page_index,
				products: products,
			};
		});
	},

	async getCategories() {
		return axios.get(`${API_DOMAIN}/categories`).then((response) => {
			return response.data;
		});
	},

	async getProductsByCategory(categoryId) {
		return axios.get(`${API_DOMAIN}/categories/${categoryId}/products`).then((response) => {
			return response.data;
		});
	},

	// async getProductById(productId) {
	// 	return axios.get(`${API_DOMAIN}/products/${productId}`).then((response) => {
	// 		return response.data;
	// 	});
	// },

	// async getProductByCategory(categoryName) {
	// 	return axios.get(`${API_DOMAIN}/products/${categoryName}`).then((response) => {
	// 		return response.data;
	// 	});
	// },
};
