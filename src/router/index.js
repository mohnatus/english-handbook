import Vue from 'vue';
import Router from 'vue-router';

import IrregularVerbs from 'Containers/IrregularVerbs';
import Tenses from 'Containers/Tenses';
import NotFound from 'Containers/NotFound';

Vue.use(Router);

export default new Router({
	routes: [

		{
			path: '/irregular-verbs',
      name: 'irregular-verbs',
			component: IrregularVerbs,
		},
		{
			path: '/tenses',
      name: 'tenses',
			component: Tenses,
		},

    {
			path: '/',
      name: 'home',
			redirect: '/tenses'
		},
    {
			path: '*',
      name: 'not-found',
			component: NotFound,
		},
	],
});
