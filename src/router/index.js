import Vue from 'vue';
import Router from 'vue-router';

import Page1 from '../containers/page1';
import Page2 from '../containers/page2';
import NotFound from '../containers/not-found';

Vue.use(Router);

export default new Router({
	routes: [

		{
			path: '/page-1',
      name: 'page-1',
			component: Page1,
		},
		{
			path: '/page-2',
      name: 'page-2',
			component: Page2,
		},
    {
			path: '/',
      name: 'home',
			redirect: '/page-1'
		},
    {
			path: '*',
      name: 'not-found',
			component: NotFound,
		},
	],
});
