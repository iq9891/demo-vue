var Vue = require('vue');
var appOptions = require('./app.vue');
//����css
require('./style.css');
var app = new Vue(appOptions).$mount('#app');
