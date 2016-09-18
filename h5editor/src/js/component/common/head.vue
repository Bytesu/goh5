<style>
	.head_con{width: 100%;height: 60px;background: #31364a;display: flex;display: -webkit-flex;justify-content: space-between;position: fixed;top: 0;z-index: 99;}
	.head_con .item{color: #fff;line-height: 60px;font-size: 12px;}
	.head_con .item>ul>li{display: inline-block;vertical-align: top;}
	.head_con .item>ul>li.logout:hover{background: rgba(255,81,81,0.8)}
	.head_con .item.left{margin-left: 20px;font-size: 22px;    display: block;
		float: left}
	.head_con .item.center{    display: block;
		float: left;
		white-space: nowrap;}
	.head_con .item.center .create_group{font-size: 0;}
	.head_con .item.center .create_group li{font-size: 12px;cursor: pointer;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;padding: 5px;display: inline-block;vertical-align: middle;height: 50px;  width: 50px;overflow: hidden;}
	.head_con .item.center .create_group li img{width: 60%;}
	.head_con .item.center .create_group li p{width: 44px;text-align: center;line-height: 44px;height: 0;transition: all ease.3s; overflow: hidden;}
	.head_con .item.center .create_group li .icon{width: 44px;height: 44px;margin: 0 auto;line-height: 44px;text-align: center;font-size: 14px;transition: all 1s;}
	.head_con .item.center .create_group li .icon:hover{background: #484d64;}
	.head_con .item.center .create_group li .icon:hover p{height: 44px;}
	.head_con .item.right{float: right;white-space: nowrap;}
	.btn_group{margin-right: 10px}
	.btn_group li{background: #76838e;height: 28px;line-height: 28px;margin: 16px 0px 0;padding: 0 15px;border-radius: 0px;cursor: pointer;transition: all ease 0.3s;-webkit-transition: all ease 0.3s;position: relative;overflow:hidden;}
	.btn_group li:hover{background: #4d5a65!important;}
	.btn_group li .qrcode{display: block;position: absolute;left: 50%;transform: translateX(-50%);-webkit-transform: translateX(-50%);background: #fff;padding: 10px;top: 45px;display: none;    border-radius: 0;
		box-shadow: 0 5px 10px rgba(0,0,0,.2);
		border: solid 1px #e9e9e9;
		-webkit-box-shadow: 0 0 10px rgba(0,0,0,0.4);
		box-shadow: 0 0 10px rgba(0,0,0,0.4);}
	.btn_group li .qrcode .triangle{position: absolute;width: 0;height: 0;border-bottom: 10px solid #fff;border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 10px solid transparent;top: -20px;left: 50%;margin-left: -10px;}
	.btn_group li .qrcode a{display: block;width: 198px;height: 198px;}
	.btn_group li .qrcode .tips{color: #76838e;text-align: center;font-size: 12px;line-height: 12px;margin-top: 5px;}
	a[target="_blank"]{color: #FFFFFF;}
</style>
<template>
	<div class="head_con">
		<a href="javascript:void(0)" v-link="{path: '/list'}" class="item left">H5EDITOR</a>
		<div class="item center" v-show="page == 'edit'">
			<ul class="create_group">
				<li @click="addText()">
					<div class="icon">
						<p>文本</p>
						<img src="/back/dist/img/text.png">
					</div>
				</li>
				<li @click="materialLibPic({show:true,msg:'插入图片',type:'IMG.PIC'})">
					<div class="icon ">
						<p>图片</p>
						<img src="/back/dist/img/background.png">
					</div>
				</li>
				<li @click="materialLibPic({show:true,msg:'背景',type:'IMG.BG'})">
					<div class="icon ">
						<p>背景</p>
						<img src="/back/dist/img/background.png">
					</div>
				</li>
				<li @click="materialLibPic({show:true,msg:'图形',type:'GRAPHIC'})">
					<div class="icon ">
						<p>图形</p>
						<img src="/back/dist/img/graphic.png">
					</div>
				</li>
				<li @click="materialLibPic({show:true,msg:'音频',type:'AUDIO'})">
					<div class="icon ">
						<p>音频</p>
						<img src="/back/dist/img/music.png">
					</div>
				</li>
				<li @click="materialLibPic({show:true,msg:'视频',type:'VIDEO'})">
					<div class="icon ">
						<p>视频</p>
						<img src="/back/dist/img/video.png">
					</div>
				</li>
				<li @click="openDialogElement">
					<div class="icon ">
						<p>插件</p>
						<img src="/back/dist/img/plugin.png" style="width: 50%;">
					</div>
				</li>
			</ul>
		</div>
		<div class="item right">
			<ul class="btn_group">
				<li v-show="page == 'edit'" >
					<a target="_blank" :href="'http://'+ host + '/api/h5/' + this.$route.params.id">新标签页预览</a>
				</li>
				<li v-show="page == 'edit'" @click="save()">保存</li>
				<li v-show="page == 'edit'" @click="submit(this.$route.params.id)">提交并跳转</li>
				<!-- <li v-show="page == 'edit'">记录</li> -->
				<li v-show="page == 'edit'" @click.stop="preview($event)">
					预览
					<div class="qrcode hide">
						<div class="triangle"></div>
						<a v-qrcode="'http://'+ host + '/show/' + this.$route.params.id" :href="'http://'+ host + '/show/' + this.$route.params.id" target="_blank"></a>
						<div class="tips">点击或扫描二维码预览</div>
					</div>
				</li>
				<li v-show="page == 'edit'" @click="showSet = !showSet">设置</li>
				<li class="logout" @click="logout()" style="background: #ff5151;">退出</li>
			</ul>
		</div>
	</div>
</template>

<script>

var Vue = require('Vue');
var $ = require('jQuery');

var Router = require('vue-route');
Vue.use(Router);
var router = new Router();

var store = require('../../store/store.js');
var actions = require('../../store/action/index.js');
var config = require('./../../../../../libs/config');
var tpl = require('../../template/tpl.js');
var utils = require('utils');

var Head = Vue.extend({
	name:'Head',
	data: function(){
		return {
			page : this.$route.path.split('/')[1],
			host: location.host
		}
	},
	props: ['showSet'],
	vuex: {
        getters: {
            workData: function(){
				return store.state.workData;
			},
			mainCode: function(){
				return store.state.mainCode;
			}
        },
        actions: utils.mixin(actions,{
			openDialogElement:(store)=>{
				store.dispatch('OPEN_DIALOG');
				store.dispatch('HIDEMATERIALLIBPIC');
			}
		})
    },
	methods:{
		addText: actions.addText,
		materialLibPic: actions.materialLibPic,
		logout: function(){
			$.ajax({
				url: '/api/user/logout',
				type: 'get',
				success: function(){
					router.go('/');
				}
			})
		},
		save: function(){
			var _this = this;
			$.ajax({
				url: '/api/work/save',
				type: 'get',
				data: {
					_id: _this.$route.params.id,
					mainCode: JSON.stringify(_this.mainCode)
				},
				success: function(data){
					localStorage[_this.$route.params.id] = null;
					actions.alert(store, {
						show: true,
						msg: '保存成功',
						type: 'success'
					})
				}
			})
		},
		submit: function(){
			var _this = this;
			$.ajax({
				url: '/api/work/save',
				type: 'get',
				data: {
					_id: _this.$route.params.id,
					mainCode: JSON.stringify(_this.mainCode)
				},
				success: function(data){
					$.ajax({
						url:'/api/upload/'+_this.$route.params.id,
						success:function (res) {
							var userInfo = localStorage.getItem('userInfo');
							if(userInfo){
								userInfo = JSON.parse(userInfo);
								if(typeof res.data =='string'){
									res.data = JSON.parse(res.data).result.data.file
								}else{
									res.data = res.data.result.data.file;
								}
								if(res.code==200&&res.data){
									res.data.userid = userInfo.user_name;
									window.location.href = config.amdox.admin.redirect(res.data);
								}else{
									alert(res.data||res.data.result.reason);
								}
							}else{
								alert('您不是从安道云科后台管理系统中进入，不能进行此项操作！');
							}


						}
					});

//					localStorage[_this.$route.params.id] = null;
//					actions.alert(store, {
//						show: true,
//						msg: '保存成功',
//						type: 'success'
//					})
				}
			})
		},
		preview: function(ev){
			if($(ev.target).find('.qrcode').hasClass('hide')){
				$(ev.target).find('.qrcode').fadeIn('fast');
				$(ev.target).find('.qrcode').removeClass('hide');
			}else{
				$(ev.target).find('.qrcode').fadeOut('fast')
				$(ev.target).find('.qrcode').addClass('hide');
			}
		}
	}
});

Vue.component('m-head', Head);

module.exports = Head;
	
</script>