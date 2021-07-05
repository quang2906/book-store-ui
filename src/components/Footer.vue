<template>
	<div class="footer">
		<hr />
		<div class="info">
			<div class="info-item">
				<h2>About</h2>
				<p>We are OCG</p>
				<p>We are OCG</p>
				<p>We are OCG</p>
				<p>We are OCG</p>
				<p>We are OCG</p>
			</div>
			<div class="info-item">
				<h2>Help</h2>
				<ul>
					<li>Customer service</li>
					<li>Customer service</li>
					<li>Customer service</li>
					<li>Customer service</li>
					<li>Customer service</li>
				</ul>
			</div>
			<div class="info-item">
				<h2>Contact</h2>
				<div class="social">
					<a href="https://facebook.com/hiro.6598">
						<img src="@/assets/icons/facebook.png" alt="facebook" />
					</a>
					<a href="https://www.instagram.com/quang.65/">
						<img src="@/assets/icons/insta.png" alt="instagram" />
					</a>
					<a href="https://twitter.com/QV19112619">
						<img src="@/assets/icons/twitter.png" alt="twitter" />
					</a>
					<a href="#">
						<img src="@/assets/icons/zalo.jpg" alt="zalo" />
					</a>
				</div>
			</div>
		</div>
		<div class="coppyright">
			&copy; Copyright by <a href="https://www.facebook.com/hiro.6598">Quang Vu</a>
		</div>
	</div>
</template>
<script>
export default {
	name: "Footer",
};
</script>
<style scope>
.footer {
	margin: 0 0 20px;
	box-sizing: border-box;
}

.info {
	margin-top: 10px;
	display: grid;
	grid-template-columns: auto auto auto;
}

.info .info-item {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h2 {
	color: rgb(247, 67, 46);
	text-decoration: underline;
	margin-bottom: 20px;
}

.social img {
	max-width: 25px;
	height: auto;
	margin: auto 5px;
}

.coppyright {
	display: flex;
	justify-content: center;
	margin-top: 50px;
}

.coppyright a {
	color: rgb(44, 62, 228);
	margin-left: 10px;
}

@media only screen and (max-width: 768px) {
	.info {
		display: grid;
		grid-template-columns: auto auto;
	}
}

@media only screen and (max-width: 500px) {
	.info {
		display: grid;
		grid-template-columns: auto;
	}
}
</style>
