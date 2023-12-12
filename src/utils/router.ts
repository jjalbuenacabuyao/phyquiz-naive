import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
})

// On new page, scroll to top
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
