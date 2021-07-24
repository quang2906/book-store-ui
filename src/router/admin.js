import { createRouter, createWebHistory } from "vue-router";
import Admin from "../pages/admin/Admin.vue";

const routes = [
	{
		path: "/admin",
		name: "Admin",
		component: Admin,
	},
	{
		path: "/admin/product",
		name: "Product",
		component: () => import("@/pages/admin/Product.vue"),
	},
	{
		path: "/admin/user",
		name: "User",
		component: () => import("@/pages/admin/User.vue"),
	},
	{
		path: "/admin/category",
		name: "Category",
		component: () => import("@/pages/admin/Category.vue"),
	},
	{
		path: "/admin/order",
		name: "Order",
		component: () => import("@/pages/admin/Order.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
