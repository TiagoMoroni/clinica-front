import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PatientView from '../views/PatientView.vue'
import store from '../store'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'login',
    component: LoginView
  },
  {
    path: '/patient',
    name: 'patient',
    component: PatientView
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: () => import('../views/DoctorView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
  } else {
      if (!store.modules.root.state.user.isAuthenticated) {
        next({
          path: "/login",
          params: { nextUrl: to.fullPath },
        });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router
