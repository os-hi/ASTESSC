// Import necessary modules and components
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Define routes
const routes: Array<RouteRecordRaw> = [
    {
    path: '/',
    redirect: '/solar',
  },
  {
    path: '/',
    component: () => import('./components/TabRoot.vue'),
    children: [
      {
        path: 'solar',
        component: () => import('./views/SolarPage.vue'),
      },
      {
        path: 'battery',
        component: () => import('./views/BatteryPage.vue'),
      }
    ],
  },

  {
    path: '/:pathMatch(.*)*', 
    redirect: '/', 
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Export router instance
export default router;
