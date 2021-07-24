<template>
	<div class="wrap-modal">
		<div class="modal">
			<div class="modal-content"><b>Are you sure?</b></div>
			<div class="modal-group-action">
				<button class="btn-yes" @click="confirmYes">Yes</button>
				<button class="btn-no" @click="confirmNo">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ConfirmDelete",
	methods: {
		confirmYes() {
			this.$emit("confirm", true);
		},
		confirmNo() {
			this.$emit("confirm", false);
		},
	},
};
</script>

<style scoped>
.wrap-modal {
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
}

.modal {
	width: 300px;
	height: 130px;
	background-color: white;
	border-radius: 10px;
	padding: 0 20px 10px;
	text-align: center;
}

.btn-yes {
	border: 1px solid #16cc9b;
	color: #16cc9b;
	height: 35px;
	border-radius: 10px;
}

.btn-yes:hover {
	border: none;
	background: #16cc9b;
	color: white;
}

.btn-no {
	border: 1px solid #f58551;
	color: #f58551;
	height: 35px;
	border-radius: 10px;
}

.btn-no:hover {
	border: none;
	background: #f58551;
	color: white;
}

.modal-content {
	padding: 20px 0;
}

.modal-group-action {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.modal-group-action button {
	width: 40%;
}
</style>
