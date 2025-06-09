import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import Creative from '../views/Creative.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio, meta: { requiresAuth: true } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { requiresAuth: true } },
  { path: '/creative', name: 'Creative', component: Creative, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router

