<template>
	<div class="login">
		<form @submit.prevent="login">
			<div class="form-group">
				<img src="@/assets/thedove_logo_1.png" />
			</div>

			<h2>Login</h2>
			<div class="form-group">
				<input type="email" placeholder="Email" v-model="email" required />
			</div>
			<div class="form-group">
				<input type="password" placeholder="Password" v-model="password" required />
			</div>
			<div class="form-group">
				<button type="submit">Login</button>
			</div>

			<!-- <router-link to="/register">Don't have account? Register now!</router-link> -->
		</form>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	computed: {
		isLoginSuccess() {
			return this.$store.state.user.isLoginSuccess;
		},
		loginMessage() {
			return this.$store.state.user.loginMessage;
		},
	},
	methods: {
		async login() {
			const user = {
				email: this.email,
				password: this.password,
			};
			await this.$store.dispatch("login", user).user;
			await this.$router.push("/dashboard");
		},
	},
	created() {
		if (this.isLoginSuccess) {
			this.$router.replace("/dashboard");
		}
	},
};
</script>

<style scoped>
img {
	max-width: 80%;
	height: auto;
}

.login {
	display: flex;
	flex-direction: column;
	margin: 120px 40% 50px;
	padding: 20px;
	border: 2px solid rgb(250, 117, 39);
}

.form-group {
	display: flex;
	justify-content: center;
	margin: 10px auto;
}

.form-group input {
	height: 40px;
	border-radius: 5px;
}

.form-group input:focus {
	outline: none;
}

h2 {
	text-align: center;
	text-decoration: none;
}

button {
	display: flex;
	justify-content: center;
	height: 25px;
	width: 100px;
	border-radius: 5px;
	border: 2px solid rgb(241, 125, 72);
	background-color: rgb(241, 125, 72);
	text-align: center;
	color: white;
}

button:hover {
	background-color: black;
	border: 2px solid black;
}
</style>
