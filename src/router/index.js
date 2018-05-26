import Vue from 'vue';
import Router from 'vue-router';
import HomepageContainer from '@/components/HomepageContainer/HomepageContainer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomepageContainer,
    },
  ],
});
