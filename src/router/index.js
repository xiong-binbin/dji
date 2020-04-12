/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Help from '@/views/Help';
import About from '@/views/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
