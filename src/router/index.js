import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/product",
		name: "Product",
		component: () => import("@/pages/product/Product.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/pages/about/About.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("@/pages/contact/Contact.vue"),
	},
	{
		path: "/cart",
		name: "Cart",
		component: () => import("@/pages/shopping-cart/Cart.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/pages/authentication/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/pages/authentication/Register.vue"),
	},
	{
		path: "/checkout",
		name: "Checkout",
		component: () => import("@/pages/checkout/Checkout.vue"),
	},
	{
		path: "/product/:id",
		name: "ProductDetail",
		component: () => import("@/pages/product-detail/ProductDetail.vue"),
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import("@/pages/admin/Dashboard.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
