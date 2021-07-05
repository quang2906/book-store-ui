<template>
	<div class="login">
		<form>
			<div class="form-group">
				<img src="@/assets/thedove_logo_1.png" />
			</div>

			<h2>Login</h2>
			<div class="form-group">
				<input type="email" name="email" id="email" placeholder="Email" />
			</div>
			<div class="form-group">
				<input type="password" name="password" id="password" placeholder="Password" />
			</div>
			<div class="form-group">
				<button type="submit">Login</button>
			</div>

			<router-link to="/register">Don't have account? Register now!</router-link>
		</form>
	</div>
</template>

<script>
export default {
	name: "Login",
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
