import { createRouter, createWebHistory } from 'vue-router'



import appRoutes from './appRoutes'


const routes = [
    ...appRoutes
  ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
  });


export default router;






