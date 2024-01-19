import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/MainComponent.vue';
import About from '../components/AboutComponent.vue';
import Resume from '../components/ResumeComponent.vue';
import Work from '../components/WorkComponent.vue';
import Contact from '../components/ContactComponent.vue';

// Use Vue Router
const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact },
  ],
});

export default router;
