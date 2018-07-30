import Vue from 'vue';
import Router from 'vue-router';
import clientsList from '@/components/clientsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myTravel BY clients',
      component: clientsList,
    },
  ],
});
