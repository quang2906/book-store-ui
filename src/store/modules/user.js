import api from "@/service/userService";

export default {
	state: {
		user: {},
		status: false,
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
		SET_STATUS(state, status) {
			state.status = status;
		},
	},
	actions: {
		async login({ commit }, payload) {
			const user = await api.login(payload);
			commit("SET_USER", user);
		},
		async logout({ commit }) {
			const status = await api.logout();
			commit("SET_STATUS", status);
		},
	},
};
