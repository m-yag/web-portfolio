import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ()=>import('../views/Projects.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: ()=>import('../views/About.vue')
  },
  {
    path: '/web-portfolio',
    name: 'Web Portfolio',
    component: ()=>import('../views/web-portfolio/WebPortfolio.vue'),
    children: [
      {
        path: '/web-portfolio/code',
        component: ()=>import('../views/web-portfolio/Code.vue')
      },
      {
        path: '/web-portfolio/journal',
        component: ()=>import('../views/web-portfolio/Journal.vue'),
        children: [
          {
            path: '/web-portfolio/journal/21-09-16',
            component: ()=>import('../views/web-portfolio/journal/21-09-16.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
