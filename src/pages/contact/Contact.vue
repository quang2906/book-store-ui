<template>
	<div class="container">
		<div class="contact">
			<div class="map">
				<img src="@/assets/map.jpg" alt="map" />
			</div>

			<div class="contact-info">
				<form class="leave-comment">
					<h2 style="color: rgb(247, 67, 46)">Send us your message</h2>

					<div class="info-item">
						<input type="text" name="name" placeholder="Full Name" />
					</div>

					<div class="info-item">
						<input type="text" name="phone-number" placeholder="Phone Number" />
					</div>

					<div class="info-item">
						<input type="text" name="email" placeholder="Email Address" />
					</div>
					<div class="info-item">
						<textarea type="text" placeholder="Message"></textarea>
					</div>

					<div class="btn-send">
						<button>Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact",
};
</script>

<style scoped>
.container {
	margin: 120px 100px 50px;
}

.contact {
	display: flex;
}

.contact img {
	max-width: 500px;
	height: auto;
	margin-right: 100px;
	border-radius: 10px;
}

.info-item input,
.info-item textarea {
	margin: 10px;
	height: 40px;
	width: 250px;
	border-radius: 10px;
	padding: 5px;
	border: 2px solid rgb(0, 0, 0);
}

.btn-send button {
	margin: 10px;
	height: 40px;
	width: 80px;
	border-radius: 10px;
	border: 2px solid rgb(247, 67, 46);
	color: rgb(247, 67, 46);
}

.btn-send button:hover {
	background-color: rgb(247, 67, 46);
	color: #fff;
}

.info-item input:focus,
.info-item textarea:focus {
	outline: none;
}
</style>
