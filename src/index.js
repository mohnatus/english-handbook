import Vue from 'vue';
import App from './components/App/index.vue';
import router from './router';

new Vue({
	el: document.getElementById('app'),
	render: (h) => h(App),
	router,
	beforeRouteUpdate(to, from, next) {
		console.log('route update 1', to, from);
		next();

	},
	beforeRouteLeave (to, from, next) {
		const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
		if (answer) {
			next()
		} else {
			next(false)
		}
	}
});
