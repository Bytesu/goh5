'use strict';

var $ = require('jQuery');
var Vue = require('Vue');
var utils = require('utils');

var Router = require('vue-route');
Vue.use(Router);
var router = new Router({hashbang :false});

var APP = Vue.extend({});
Vue.config.debug = true;
Vue.config.hashbang = false;
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
       //
       //  console.log('///')
        if(arguments[0].to.fullPath=='/list'&&arguments[0].to.query&&arguments[0].to.query.username&&arguments[0].to.query.credentials){
            arguments[0].abort();
            $.ajax({
                url:'/api/user/login',
                data:{user_name:arguments[0].to.query.username,credentials:arguments[0].to.query.credentials},
                success:function (res) {
                    localStorage.userInfo = JSON.stringify(res.data);
                    localStorage.remember = true;
                    router.go('/list');
                }
            })
        }else{
            router.go('/');
        }
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