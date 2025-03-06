import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/homePage.vue';
import Pictures from '../views/viewPictures.vue';
import Socials from '../views/viewSocials.vue';

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: Home,
  },
  {
  path: '/pictures',
  name: 'view-pictures',
  component: Pictures
  },
  {
  path: '/socials',
  name: 'view-socials',
  component: Socials
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
