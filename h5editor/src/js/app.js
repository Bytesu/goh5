'use strict';

var $ = require('jQuery');
var Vue = require('Vue');
var utils = require('utils');

var Router = require('vue-route');
Vue.use(Router);
var router = new Router();

var APP = Vue.extend({});
Vue.config.debug = true;
// vue component
let Home = require('./component/home/main.vue');
let List = require('./component/list/main.vue');
let Edit = require('./component/edit/main.vue');

router.map({
    '/': {
        component: Home
    },
    '/list': {
        component: List
    },
    '/edit/:id': {
        component: Edit
    }
});

router.beforeEach(function() {
    if (utils.getCookie('isLogin') !== '1') {
        router.go('/');
        return;
    }
    if(router.app.$route.path === '/' && utils.getCookie('isLogin') === '1'){
        return router.go('/list');
    }
});

router.redirect({
    '*': '/'
});
$('body').on('contextmenu', function () {
    window.event.returnValue = false;
    return false;
});
router.start(APP, '#app');