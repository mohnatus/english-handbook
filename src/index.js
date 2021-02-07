import Vue from 'vue';
import router from './router';

import './style.scss';
import App from 'Components/App';

new Vue({
  el: document.getElementById('app'),
  render: (h) => h(App),
  router
});

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

}
