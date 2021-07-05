<template>
	<div class="container">
		<div class="block-about">
			<div class="about-img">
				<img src="@/assets/about.jpg" alt="about-us" />
			</div>

			<div class="about-content">
				<h3>Our story</h3>

				<p>
					We are Open Commerce Group, the leading company in software development and production in
					the world!!!
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "About",
};
</script>

<style scoped>
* {
	margin: 0;
	box-sizing: border-box;
}

.container {
	margin-top: 120px;
}

.block-about {
	display: flex;
	margin: 50px 100px;
	justify-content: center;
}

.about-img img {
	max-width: 400px;
	height: auto;
	margin-right: 50px;
}

.about-content h3 {
	color: rgb(247, 67, 46);
	font-size: 50px;
	margin-bottom: 20px;
	text-decoration: underline;
}

.about-content p {
	font-size: 20px;
}

@media only screen and (max-width: 920px) {
	.block-about {
		flex-wrap: wrap;
	}
}
</style>
