<template>
	<div class="home">
		<div class="home1">
			<div class="home1-info">
				<h2>WELCOME</h2>
				<h1>THE DOVE</h1>
			</div>
			<img src="@/assets/home/slider_1.png" alt="" />
		</div>

		<div class="about-us">
			<div class="about-info">
				<h1>About Us</h1>
				<p>We are The Dove, best company about cars...</p>
				<router-link to="/about"><button>READ MORE</button></router-link>
			</div>
			<img src="@/assets/home/about_us.png" alt="" />
		</div>

		<div class="about-us">
			<img src="@/assets/home/about_us_2.png" alt="" />
			<div class="about-info">
				<h1>Our Cars</h1>
				<p>We provide the best cars for customers...</p>
				<router-link to="/about"><button>DISCOVER</button></router-link>
			</div>
		</div>

		<img class="cross_blue" src="@/assets/home/cross_blue.png" />
		<img class="home2" src="@/assets/home/hp2.jpg" />
	</div>
</template>

<script>
export default {
	name: "Home",
};
</script>
<style scoped>
* {
	margin: 0;
	box-sizing: border-box;
}

.home1 {
	background-image: url("../assets/home/top_bg.png");
	display: flex;
	justify-content: space-around;
	margin-bottom: 50px;
}

.home1-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.home1-info h2 {
	text-decoration: none;
	margin-bottom: 20px;
}

.home1-info h1 {
	margin-left: 50px;
	font-size: 50px;
	color: #fff;
}

.home1 img {
	width: 60%;
	margin-top: 50px;
	margin-bottom: -100px;
}

.home2 {
	width: 100%;
}

.cross_blue {
	width: 100%;
	margin-bottom: -5px;
}

.about-us {
	display: flex;
	justify-content: space-around;
	padding: 50px;
}

.about-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.about-info h1 {
	text-decoration: none;
	font-size: 50px;
	margin-bottom: 15px;
}

.about-us img {
	width: 50%;
}

.about-us button {
	height: 40px;
	width: 150px;
	border-radius: 10px;
	border: 2px solid rgb(247, 67, 46);
	color: rgb(247, 67, 46);
	margin-top: 15px;
}

.about-us button:hover {
	background-color: rgb(247, 67, 46);
	color: #fff;
}
</style>
