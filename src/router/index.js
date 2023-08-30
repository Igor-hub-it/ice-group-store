import { createRouter, createWebHashHistory } from 'vue-router'

function lazyView(viewName) {
  return () => import(`@/views/${viewName}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyView('main')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: lazyView('catalog')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: lazyView('contacts')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
