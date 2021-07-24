// import axios from "axios";
import api from "../../service/productService";
// import { API_DOMAIN } from "@/config.js";

export default {
	state: {
		products: [],
		product: {},
		categories: [],
		category: {},
		isLoading: false,
		pageIndex: 1,
		sort: "nameasc",
		search: "",
		totalProducts: 0,
		totalPages: 0,
	},
	getters: {},
	mutations: {
		setLoading(state, status) {
			state.isLoading = status;
		},

		setProducts(state, products) {
			state.products = products;
		},

		// setProduct(state, product) {
		// 	state.product = product;
		// },

		// updateProductQuantity(state, quantity) {
		// 	if (quantity < 1) quantity = 1;
		// 	state.product.quantity = quantity;
		// },

		setCategories(state, categories) {
			state.categories = categories;
		},

		setCategory(state, category) {
			state.category = category;
		},

		setPageIndex(state, pageIndex) {
			state.pageIndex = pageIndex;
		},

		setSort(state, sort) {
			state.sort = sort;
		},

		setSearch(state, search) {
			state.search = search;
		},
		setTotalProducts(state, totalProducts) {
			state.totalProducts = totalProducts;
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages;
		},
	},
	actions: {
		async getProducts({ state, commit }, { search, pageIndex }) {
			commit("setPageIndex", pageIndex);
			commit("setSearch", search);

			const response = await api.getProducts({
				page: state.pageIndex,
				search: state.search,
			});

			commit("setProducts", response.products);
			commit("setPageIndex", response.pageIndex);
			commit("setTotalProducts", response.totalProducts);
			commit("setTotalPages", response.totalPages);
		},

		async sortProducts({ state, commit }, { sort, pageIndex }) {
			commit("setPageIndex", pageIndex);
			commit("setSort", sort);

			const response = await api.sortProducts({
				page: state.pageIndex,
				sort: state.sort,
			});

			commit("setProducts", response.products);
			commit("setPageIndex", response.pageIndex);
			commit("setTotalProducts", response.totalProducts);
			commit("setTotalPages", response.totalPages);
		},

		async getCategories({ commit }) {
			const categories = await api.getCategories();
			commit("setCategories", categories);
		},

		async getProductsByCategory({ commit }, categoryId) {
			const products = await api.getProductsByCategory(categoryId.id);
			commit("setProducts", products);
		},
	},

	modules: {},
};
