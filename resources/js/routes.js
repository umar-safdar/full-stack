import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import GuestLayout from './layouts/Guest.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";
import ResetPassword from "./pages/ResetPassword.vue";
import Home from "./pages/Home.vue";
import Dashboard from "./pages/admin/Dashboard.vue";


const routes = [
  {
    path: '/',
    component: GuestLayout,
    meta: {auth: true},
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
  },

  // admin layouts will go here
{
    path: '/dashboard',
    component: DashboardLayout,
    meta: {auth: true},
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token');

if (to.meta.auth && !token) {
    next('/login');  
  } else {
    next();
  }

})

export default router
