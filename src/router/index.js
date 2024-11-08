import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateAccount from '@/components/CreateAccount.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import WishListView from '@/views/WishListView.vue'
import OrderView from '@/views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: CreateAccount
    },
    {
      path: '/login',
      name: 'login',
      component: CreateAccount
    },
    {
      path: '/product-detail',
      name: 'product-detail',
      component: ProductDetailsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishListView
    },
   
  ]
})

export default router
