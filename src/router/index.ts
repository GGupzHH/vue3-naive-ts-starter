import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory('/vue3-naive-ts-starter'),
  routes
})

export default router
