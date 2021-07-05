<template>
	<h1>The Dove</h1>
	<nav>
		<ul class="main">
			<li>
				<a href="#">Home</a>
			</li>
			<li>
				<dropdown-menu> </dropdown-menu>
				<a>Product</a>
				<!-- <ul class="drop menu">
					<li><a href="#">All Products</a></li>
					<li><a href="#">Novel</a></li>
					<li><a href="#">Horror</a></li>
					<li><a href="#">Diary</a></li>
				</ul> -->
			</li>
			<li>
				<a href="#">About us</a>
			</li>
			<li>
				<a href="#">Contact</a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	name: "Nav",
};
</script>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #1e1e1e;
	background-image: url("../assets/background.jpg");
	background-size: cover;
	height: 100vh;

	font-family: "Raleway", sans-serif;
	letter-spacing: 1px;
}
h1 {
	text-align: center;
	color: #fff;
	padding-top: 20px;
}

ul {
	list-style: none;
}

nav {
	height: 60px;
	margin: 40px auto;
	background-color: rgba(23, 23, 50, 0.7);
	text-align: center;
	border-radius: 5px;
}
.main {
	display: flex;
	justify-content: center;
}
.main > li {
	margin: 0 2%;
}
.main > li a {
	margin-top: 10px;
	border-left: 1px solid rgba(23, 23, 50, 1);
}
a {
	text-decoration: none;
	color: #ffe;
	text-transform: capitalize;
	font-family: monospace;
	display: block;
	padding: 10px 15px;
	font-size: 16px;
	transition: background-color 0.5s ease-in-out;

	font-family: "Raleway", sans-serif;
}

a:hover {
	background-color: #631818;
}

.drop li {
	opacity: 0;
	transform-origin: top center;
}

.drop li a {
	margin: 0;
	background-color: rgba(23, 23, 50, 0.7);
	padding: 10px 15px;
}

.drop li a:hover {
	color: rgb(68, 248, 68);
}

/*------------- menu animation -------------------*/

.main li:hover .menu li:first-of-type {
	animation: menu 0.3s ease-in-out forwards;
	animation-delay: 0.2s;
}

.main li:hover .menu li:nth-of-type(2) {
	animation: menu 0.3s ease-in-out forwards;
	animation-delay: 0.4s;
}

.main li:hover .menu li:nth-of-type(3) {
	animation: menu 0.3s ease-in-out forwards;
	animation-delay: 0.6s;
}

.main li:hover .menu li:last-of-type {
	animation: menu 0.3s ease-in-out forwards;
	animation-delay: 0.8s;
}

@keyframes menu {
	0% {
		opacity: 0;
		transform: scale(2);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
