<template>
	<div class="home_bg"></div>
	<div class="all_center1">
		<h1 style="color: #fff;">欢迎来到 H5EDITOR!</h1>
		<div class="home_btn">
			<a href="javascript:void(0)" @click="showLogin = !showLogin">登录</a>
			<a href="javascript:void(0)" @click="showSignup = !showSignup">注册</a>
		</div>
	</div>
	<m-login :show-login.sync="showLogin" :show-signup.sync="showSignup"></m-login>
	<m-signup :show-login.sync="showLogin" :show-signup.sync="showSignup"></m-signup>
</template>

<style>
.home_bg{position: fixed;top: 0;left: 0;
    background:#2373e2 url('/back/dist/img/login_bg.png') no-repeat scroll top;
    width: 100%;height: 100%;background-size: cover;}
.home_btn{font-size: 0;
	text-align: left;
	margin: 50px 0;}
.all_center1 {    display: block;
	position: relative;
	width: 500px;
	height: 300px;
	margin: 60px auto;
	padding:15px;
	left: auto;
	top: auto;border-radius: 10px;}
.home_btn a{display: inline-block;vertical-align: middle;font-size: 12px;color: #fff;padding: 6px 20px;margin: 0 8px 0 0;cursor: pointer;border-radius: 1px;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;}
.home_btn a:first-child{background: #00BCD4;}
.home_btn a:first-child:hover{background: #00BCD4;text-decoration: none;}
.home_btn a:last-child{background: rgba(255,81,81,1);}
.home_btn a:last-child:hover{background: rgba(255,81,81,0.8);text-decoration: none;}
</style>


<script>

var Vue = require('Vue');
var $ = require('jQuery');

var Login = require('../common/login.vue');
var Signup = require('../common/signup.vue');

var Home = Vue.extend({
	name: 'Home',
	data: function(){
		return {
			showLogin: false,
			showSignup: false,
		}
	}
});
module.exports = Home;

</script>