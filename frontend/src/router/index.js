import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
<<<<<<< HEAD
    path: '/loading',
    name: 'StartLoading',
    component: () => import('../views/StartLoadingView.vue')
=======
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
>>>>>>> 37b247035477f4a453be089bc558ff158990f2b4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
