import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import Services from '@/views/Services.vue'
import SignIn from '@/views/SignIn.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
