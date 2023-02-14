import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'FrontPage',
        component: () => import('../views/fornt/FrontPage.vue')
      },
      {
        path: 'PorductsView',
        component: () => import('../views/fornt/ProductsView.vue')
      },
      {
        path: 'CartView',
        component: () => import('../views/fornt/CartView.vue')
      },
      {
        path: 'PorductView/:id',
        component: () => import('../views/fornt/ProductView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
