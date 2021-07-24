<template>
	<div class="pagination flex-m flex-w p-t-26">
		<a
			href="#"
			@click="changePage(pageIndex - 1, $event)"
			class="item-pagination flex-c-m trans-0-4"
			:class="{ disabled: pageIndex === 1 }"
			>«</a
		>
		<a
			href="#"
			@click="changePage(page, $event)"
			class="item-pagination flex-c-m trans-0-4"
			:class="{
				'active-pagination': pageIndex ? page === pageIndex : page === 1,
			}"
			v-for="page in displayPages"
			:key="page"
			>{{ page }}</a
		>
		<a
			href="#"
			@click="changePage(pageIndex + 1, $event)"
			class="item-pagination flex-c-m trans-0-4"
			:class="{ disabled: pageIndex === numberOfPages }"
			>»</a
		>
	</div>
</template>

<script>
export default {
	name: "Pagination",

	props: ["length", "pageSize", "pageIndex", "numberOfDisplayPages"],

	emits: ["change"],

	computed: {
		numberOfPages() {
			return Math.ceil(this.length / this.pageSize);
		},
		displayPages() {
			let numberOfDisplay = this.numberOfDisplayPages || 5;
			const halfNumberOfDisplayPages = Math.floor(numberOfDisplay / 2);

			let display = [];

			let startDisplay = this.pageIndex - halfNumberOfDisplayPages;
			if (startDisplay < 0) startDisplay = 0;

			numberOfDisplay--;
			let endDisplay = startDisplay + numberOfDisplay;

			if (endDisplay > this.numberOfPages - 1) {
				endDisplay = this.numberOfPages - 1;
				startDisplay = endDisplay - numberOfDisplay;
				if (startDisplay < 0) startDisplay = 0;
			}

			for (let i = startDisplay + 1; i <= endDisplay + 1; i++) {
				display.push(i);
			}

			return display;
		},
	},

	methods: {
		changePage(page, event) {
			event.preventDefault();
			this.$emit("change", page);
		},
	},
};
</script>

<style scoped>
.item-pagination {
	user-select: none;
}
.item-pagination.disabled {
	pointer-events: none;
	opacity: 0.5;
}
</style>
