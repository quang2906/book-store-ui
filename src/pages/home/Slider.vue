<template>
	<div id="slider">
		<div class="slider">
			<ul class="slides" :style="{ left: -width * current + 'px' }">
				<li v-for="(slide, i) in slides" :key="i">
					<img :src="slide" alt="" />
				</li>
			</ul>
			<ul class="bullets">
				<li
					v-for="(slide, i) in slides"
					:key="i"
					@click="selectSlide(i)"
					v-html="i == current ? '&#9679;' : '&omicron;'"
				></li>
			</ul>
			<a class="prev" href="#" @click.prevent="prevSlide">&#x25C0;</a>
			<a class="next" href="#" @click.prevent="nextSlide">&#x25B6;</a>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			slides: [
				"http://localhost:3000/images/zbanner3.jpg",
				"http://localhost:3000/images/zbanner3.jpg",
				"http://localhost:3000/images/zbanner3.jpg",
				"http://localhost:3000/images/zbanner3.jpg",
				"http://localhost:3000/images/zbanner3.jpg",
			],
			current: 0,
			width: 1400,
			timer: 0,
		};
	},
	methods: {
		nextSlide: function() {
			this.current++;
			if (this.current >= this.slides.length) this.current = 0;
			this.resetPlay();
		},
		prevSlide: function() {
			this.current--;
			if (this.current < 0) this.current = this.slides.length - 1;
			this.resetPlay();
		},
		selectSlide: function(i) {
			this.current = i;
			this.resetPlay();
		},
		resetPlay: function() {
			clearInterval(this.timer);
			this.play();
		},
		play: function() {
			let app = this;
			this.timer = setInterval(function() {
				app.nextSlide();
			}, 2000);
		},
	},
	created: function() {
		this.play();
	},
};
</script>
<style scoped>
body {
	background-color: #2c3e50;
}
#slider {
	width: 100%;
}

.slider {
	margin: 0 auto;
	padding: 0;
	width: 100%;
	height: 500px;
	position: relative;
	overflow: hidden;
}

.slider ul.slides {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: table;
	position: absolute;
	top: 0;
	transition: left 800ms;
}

.slider ul.slides li {
	list-style-type: none;
	display: table-cell;
}

.slider ul.slides li img {
	width: 1400px;
}

.slider ul.bullets {
	width: inherit;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 0;
	margin: 0 0 10px 0;
	text-align: center;
	z-index: 1;
}

.slider ul.bullets li {
	list-style-type: none;
	display: inline;
	color: #fff;
	cursor: pointer;
	padding: 0 5px;
	font-size: 20px;
	font-family: sans-serif;
}

.slider .prev,
.slider .next {
	text-decoration: none;
	color: #fff;
	position: absolute;
	z-index: 1;
	font-size: 42px;
	top: 43%;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.slider .prev {
	left: 20px;
}
.slider .next {
	right: 20px;
}
</style>
