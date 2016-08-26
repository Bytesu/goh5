
<style>


	.list_con{max-width: 1130px;margin: 80px auto 0;}
	.list_con .list_head{margin:0 12px;position: relative;font-size: 0;}
	.list_con .list_head ul{display: inline-block;vertical-align: top;font-size: 0;}
	.list_con .list_head ul li{
		display: inline-block;
		vertical-align: top;
		text-align: center;
		cursor: pointer;
		transition: all ease 0.2s;
		-webkit-transition: all ease 0.2s;
		font-size: 16px;
		font-size: 14px;
		display: inline-block;
		padding: 5px 20px;
		margin: 0 10px 0 0;
	}
	.list_con .list_head ul li.active{background: #00BCD4;color: #fff;}
	.list_con .list_head ul li:hover{background: #00b0d4;color: #fff;}
	.list_con .list_head .search{display: inline-block;position: absolute;right: 20px;}
	.list_con .list_body{width: 100%;margin-top: 20px;}
	.list_con .list_body ul{font-size: 0;}
	.list_con .list_body ul:before{    content: " ";
		display: table;}
	.list_con .list_body ul li{
		width: 219px;
		background: #fff;
		padding: 10px;
		position: relative;
		font-size: 16px;
		display: inline-block;
		vertical-align: top;
		height: 343px;
		overflow: hidden;
		float: left;
		width: 180px;
		padding: 10px;
		margin-top: 5px;
		margin-left: 12px;
		margin-right: 12px;
		border-bottom: 1px solid #ddd;
	}
	.list_con .list_body ul li:hover{box-shadow:0 0 8px #999;background-color:#fff;cursor:pointer}
	.list_con .list_body ul li:last-child{border-right: none;}
	.list_con .list_body ul li.create{cursor: pointer;}
	.list_con .list_body ul li.create .shu{width: 6px;height: 100px;background: #00BCD4;margin: 0 auto 10px;}
	.list_con .list_body ul li.create .heng{width: 100px;height: 6px;background: #00BCD4;margin: 0 auto 10px;position: absolute;top: 47px;left: 50%;transform: translateX(-50%);-webkit-transform: translateX(-50%);}
	.list_con .list_body ul li.create span{font-size: 14px;color: #00BCD4;}
	.list_con .list_body ul li .top{position: relative;}
	.list_con .list_body ul li .top .qrcode{position: absolute;width: 100%;height: 100%;left: 0;top: 0;cursor: pointer;display: none;background: rgba(0,0,0,0.4);}
	.list_con .list_body ul li .top .qrcode canvas{display: block;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);padding: 8px;border-radius: 6px;background: #fff;}
	.list_con .list_body ul li .top img{display: block;width: 100%;height: auto;}
	.list_con .list_body ul li .top .status{display: block;position: absolute;width: 120px;height: 24px;color: #fff;font-size: 12px;line-height: 24px;transform: rotate(-45deg);-webkit-transform: rotate(45deg);background: #aaa;text-align: center;right: -36px;top: 8px;}
	.list_con .list_body ul li .top .status.status_0{}
	.list_con .list_body ul li .top .status.status_1{background: #00BCD4;}
	.list_con .list_body ul li .middle{padding: 8px;box-sizing: border-box;border-bottom: 1px solid #ddd;width: 180px;
		height: 82px;
		position: absolute;bottom:32px;}
	.list_con .list_body ul li .middle p{font-size: 16px;color: #3f4a58;line-height: 24px;text-align: left;overflow: hidden;text-overflow: ellipsis;width: 100%;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
	.list_con .list_body ul li .middle .desc{font-size: 0;}
	.list_con .list_body ul li .middle .desc em{font-size: 12px;color: #a0aec4;display: block;vertical-align: top;font-style: normal;line-height: 20px;}
	.list_con .list_body ul li .middle .desc em:first-child{text-align: left;overflow: hidden;text-overflow: ellipsis;}
	.list_con .list_body ul li .middle .desc em:last-child{text-align: left;}
	.list_con .list_body ul li .bottom{    position: absolute;
		right: 12px;
		left: 12px;
		bottom: 0px;}
	.list_con .list_body ul li .bottom a{display: block;vertical-align: top;color: #00BCD4;font-size: 12px;line-height: 32px;margin: 0 8px 0 0;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;float: left;}
	.list_con .list_body ul li .bottom a:hover{text-decoration: underline;}
</style>
<template>
	<m-head></m-head>
	<div class="list_con">
		<div class="list_head">
			<ul>
				<li :class="{'active':listType === 1}" @click="changeListTab(1)">我的作品</li>
				<li :class="{'active':listType === 0}" @click="changeListTab(0)">全部作品</li>
			</ul>
		</div>
		<div class="list_body">
			<ul class="clearfix">
				<li class="create" @click="showCreate = !showCreate">
					<div class="all_center">
						<div class="heng"></div>
						<div class="shu"></div>

					</div>
					<div class="bottom">
						<a>创建新作品</a>
					</div>
				</li>
				<li v-for="item in listData" track-by="$index">
					<div class="top" v-mouse-qrcode="'http://'+ host + '/show/' + item._id">
						<a :href="'http://'+ host + '/api/h5/' + item._id" target="_blank" class="qrcode"></a>
						<img :src="item.about.thumbnail">
						<span class="status" :class="item.status === 0 ? 'status_0' : 'status_1'">{{item.status === 0 ? '草稿' : '发布'}}</span>
					</div>
					<div class="middle">
						<p>{{item.title}}</p>
						<div class="desc">
							<em>{{item.user_name}}</em>
							<em>{{item.createTime | Date 'yyyy-MM-dd hh:mm:ss'}}</em>
						</div>
					</div>
					<div class="bottom">
						<a href="javascript:void(0)" v-show="listType === 1" v-link="{path:'/edit/' + item._id}">编辑</a>
						<a href="javascript:void(0);"  @click="copy(item._id)" >复制</a>
						<a :href="'http://'+host+'/api/zip/'+item._id">下载</a>
						<a target="_blank" :href="'http://'+host+'/api/h5/'+item._id">预览</a>
						<a href="javascript:void(0)" v-show="listType === 1" @click="deleteWork(item._id)">删除</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<m-pagination :pagination-conf="paginationConf"></m-pagination>
	<m-loading :loading.sync="loading"></m-loading>
	<m-create :show-create.sync="showCreate" :list-type="listType"></m-create>
	<m-alert></m-alert>
	<m-confirm></m-confirm>
</template>
<script>

var Vue = require('Vue');
var $ = require('jQuery');


var Router = require('vue-route');
Vue.use(Router);
var router = new Router();

var store = require('../../store/store.js');
var actions = require('../../store/action/index.js');

var dateFilter = require('../../filter/index.js');

var directionQrcode = require('../../directive/qrcode.js');

var Head = require('../common/head.vue');
var Pagination = require('../common/pagination.vue');
var Loading = require('../common/loading.vue');
var Alert = require('../common/alert.vue');
var Create = require('./create.vue');
var Confirm = require('../common/confirm.vue');


var listVm = null;
var List = Vue.extend({
	name: 'List',
	store,
	data: function(){
		return {
			loading: true,
			showCreate: false,
			listData: '',
			listType: 1, // 0:默认 1:自己
			host: location.host,
			paginationConf: {
				currentPage: 1,
				totalItems: 0,
				itemsPerPage: 7,
				pagesLength: 5,
				onChange: function(){
					var _this = this;
					listVm.loadListData({me: listVm.listType,page: this.currentPage},function(data){
						if(!data.iserro){
							listVm.loading = false;
							_this.totalItems = data.data.totalItems;
							listVm.listData = data.data.listData;
						}else{
							listVm.alertObj = {
								show: true,
								msg: data.msg
							}
						}
					});
				}
			}
		}
	},
	init: function(){
		listVm = this;
	},
	created: function(){
		var _this = this;
		this.loadListData({me: this.listType,page: this.currentPage},function(data){
			if(!data.iserro){
				_this.loading = false;
				_this.paginationConf.totalItems = data.data.totalItems;
				_this.listData = data.data.listData;
			}else{
				_this.alertObj = {
					show: true,
					msg: data.msg
				}
			}
		});
	},
	vuex: {
	  	getters: {
	  		confirmObj: function(){
				return store.state.confirmObj;
			}
	  	},
	  	actions: actions
	},
	components: {
		'm-pagination': Pagination,
	},
	methods: {
		copy:function (_id) {
			$.ajax({
				url:'/api/copy/'+_id,
				type:'get',
				success:function(data){
					window.location.reload();
				}
			})
		},
		changeListTab: function(type){
			this.listType = type;
			this.paginationConf.currentPage = 1;
			this.paginationConf.onChange();
		},
		loadListData: function(params,cb){
			var _this = this;
			var me = params.me === undefined ? 1 : params.me;
			var page = params.page || 1;
			$.ajax({
				url: '/api/list',
				type: 'get',
				data: {
					page: page,
					me: me
				},
				success: function(data){
					cb && cb(data);
				}
			})
		},
		deleteWork: function(id){
			var _this = this;
			var confirmParams = {
				show: true,
				msg: '是否删除本作品？',
				event: function(){
					_this.loading = true;
					$.ajax({
						url: '/api/delete',
						type: 'get',
						data: {
							_id: id
						},
						success: function(data){
							_this.loading = false;
							_this.paginationConf.onChange();
						}
					})
				}
			}
			actions.confirm(store,confirmParams);			
		}
	}
})

module.exports = List;

</script>
