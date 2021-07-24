export default {
	state: {
		items: [],
	},
	mutations: {
		SET_ITEMS(state, payload) {
			state.items = payload;
		},
		ADD_ITEM(state, payload) {
			state.items.push(payload);
		},
		SET_QUANTITY(state, { payload }) {
			state.items[payload.index].payload.quantity = payload.quantity;
		},
		REMOVE_ITEM(state, index) {
			console.log(index);
			console.log(state.items.length);
			state.items.splice(index, 1);
		},
	},
	actions: {
		setCart({ commit }, payload) {
			commit("SET_ITEMS", payload);
		},
		addToCart({ commit }, payload) {
			commit("ADD_ITEM", payload);
		},
		changeQuantity({ commit }, payload) {
			commit("SET_QUANTITY", payload);
		},
		removeItem({ commit }, index) {
			commit("REMOVE_ITEM", index);
		},
	},
	getters: {
		getTotalAmount(state) {
			let total = 0;
			for (let item of state.items) {
				total += item.payload.quantity * item.payload.price;
			}
			return total;
		},
		getTotalProduct(state) {
			let total = 0;
			for (let item of state.items) {
				total += item.payload.quantity;
			}
			return total;
		},
	},
};
