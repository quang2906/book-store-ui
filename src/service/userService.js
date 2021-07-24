import axios from "axios";
import { API_DOMAIN } from "@/config";

export default {
	async login(user) {
		return await axios
			.post(`${API_DOMAIN}/login`, user, { withCredentials: true })
			.then((response) => {
				console.log(response);
				localStorage.setItem("user", JSON.stringify(response.data));
				return response.data;
			});
	},
	async logout() {
		return await axios
			.post(`${API_DOMAIN}/logout`, null, { withCredentials: true })
			.then((response) => {
				localStorage.removeItem("user");
				return response.data;
			});
	},
};
