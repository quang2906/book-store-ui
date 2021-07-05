import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    product: {},
    isLoading: false,
    cartItems: [],
    auth: {
      isAuthenticated: false,
    }
  },
  mutations: {
    SET_LOADING(state, status) {
     state.isLoading = status;
    },
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    UPDATE_PRODUCT_QUANTITY(state, quantity) {
    if (quantity < 1) quantity = 1;
    state.product.quantity = quantity;
  },
    TOGGLE_AUTH(state){
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
  },
  actions: {
  async getProducts({ commit, state }) {
    await axios.get('http://localhost:3000/api/v1/products')
            .then(response => {
                commit('SET_PRODUCTS', response.data);
        });
        return state.products;
    },
    async getProductById({ commit }, productId) {
    commit("SET_LOADING", true);

    const product = await axios.get(`http://localhost:3000/api/v1/products/${productId}`).then((response) => {
      return response.data;
    });
    product.quantity = 1;

    commit("SET_PRODUCT", product);
    commit("SET_LOADING", false);
  },
  // async getProductById({ commit }) {
  //   await axios.get('http://localhost:3000/api/v1/products/${id}')
  //           .then(response => {
  //               commit('SET_PRODUCT', response.data)
  //       })
  //   },
  },
  
  modules: {
  }
});
