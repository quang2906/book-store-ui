import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import("@/views/Product.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/About.vue")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("@/views/Contact.vue")
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("@/components/cart/CartDetail.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/components/authentication/Login.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/components/authentication/Register.vue")
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import("@/components/Checkout.vue")
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import("@/views/ProductDetail.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
