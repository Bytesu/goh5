
<style>
	.lib_con{display: flex;flex-direction: row;}
	.lib_con .lib_list{width: 200px;display: flex;flex-direction: column;}
	.lib_con .lib_list .group{flex: 1;margin-top: 0px;}
	.lib_con .lib_list .group li{border-bottom: 1px solid #ccd5db;background: #fff;width: 100%;padding: 0 0 0 20px;box-sizing: border-box;color: #76838f;font-size: 12px;height: 44px;line-height: 44px;cursor: pointer;}
	.lib_con  .upload_btn{width: 80px;height: 28px;line-height: 28px;font-size: 14px;color: #fff;text-align: center;background: #007fff;position: relative;display: inline-block;padding: 0px 10px;float: right;margin: 10px 32px 0 32px;cursor: pointer;}
	.lib_con .lib_main{flex: 1;background: #fff;margin-top: 0px !important;border-top-left-radius: 6px;padding: 0 15px;overflow: auto;position: relative;}
	.lib_con .lib_main .lib_main_head{width: 100%;height: 28px !important;border-bottom: 1px solid #ccd5db;display: flex;justify-content: flex-end;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group{font-size: 0;height: 28px !important;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group li{display: inline-block;vertical-align: middle;font-size: 12px;line-height: 28px !important;margin: 0 5px;padding: 0 10px;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group li span{cursor: pointer;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;color: #76838f;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group li span:hover{color: #007fff;}
	.lib_con .lib_main .lib_main_body .pics_con{font-size: 0;}
	.lib_con .lib_main .lib_main_body .pics_con li{border:1px solid #ccc;display: inline-table;vertical-align: top;width: 31%;margin: 10px 1% 0;position: relative;overflow: hidden;padding-bottom: 31%;background: #ddd;cursor: pointer;}
	.lib_con .lib_main .lib_main_body .pics_con li:hover{    box-shadow: 0 0 8px #999;background-color: #fff;cursor: pointer;}
	.lib_con .lib_main .lib_main_body .pics_con.graphic li{margin-bottom: 0;background: none;border: none;padding-bottom: 0;}
	.lib_con .lib_main .lib_main_body .pics_con li img{display: block;position: absolute;top: 50%;left: 50%;width: 100%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);}


	.lib_con .lib_main .lib_main_body .audio {    width: 100%;
		font-size: 0;
		padding: 10px 0;}
	.lib_con .lib_main .lib_main_body .audio li{line-height: 32px;background: #fff;position: relative;}
	.lib_con .lib_main .lib_main_body .audio li audio{display: none;}
	.lib_con .lib_main .lib_main_body .audio li span{ display: inline-block;
		vertical-align: middle;
		font-size: 12px;
		color: #ccc;
		float: right;
		margin-right: 10px; }
	.lib_con .lib_main .lib_main_body .audio li a{    display: inline-block;
		vertical-align: middle;
		font-size: 12px;
		color: rgba(8,161,239,1);
		float: right;
		margin-right: 10px;}
	.lib_con .lib_main .lib_main_body .audio li p{    display: inline-block;
		vertical-align: middle;
		font-size: 12px;
		color: #76838f;
		margin-left: 10px;}
	.lib_con .lib_main .lib_main_body .audio li audio{ opacity: 0;}
	.lib_con .lib_main .lib_main_body .audio li:hover audio{ width: 85%;
		position: absolute;
		top: 0;
		left: 0;    display: block;
		right: 0;
		bottom: 0;
		z-index: 100000;opacity: 1;transition: all 1s;}
	.lib_con .lib_main .lib_main_body .audio li .use{display: none;}
	.lib_con .lib_main .lib_main_body .audio li:hover .use{
		width: 15%;display: block;
		background: #00BCD4;
		float: right;
		cursor: pointer;
		color: #FFF !important;
		text-align: center;
		position: relative;
		line-height: 32px;
		font-size: small;
	}
    .lib_con .lib_main .lib_main_body .video li{
        width: 100%;
        border-bottom: 1px solid #00BCD4;
        padding-bottom: 10px;
        color: #666;    margin-bottom: 10px;
    }
    .lib_con .lib_main .lib_main_body .video li video{width: 100%;}
    .lib_con .lib_main .lib_main_body .video li span{float: right;}
    .lib_con .lib_main .lib_main_body .video li .use{    display: block;float: right;
		background: #00BCD4;
		color: #FFF;
		padding: 5px 20px;
		position: relative;
		top: -5px;
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		cursor: pointer;}
</style>
<template>
	<div class="dialog_con lib_con" v-show="materialLibPicObj.show" transition="fadmaterialLibPicObje">
		<div class="dialog_bg" @click="hideMaterialLibPic()"></div>
		<div class="dialog_main_con all_center">
			<div class="dialog_head">
				<h2>素材库</h2>
				<p  >{{materialLibPicObj.msg}}</p>
				<div class="upload_btn" v-tips="['top','一次上传最多6张']">
					<span>上传</span>
                    <!--image/gif, image/jpeg, image/png, image/jpg-->
					<input type="file" multiple  accept="" @change="uploader($event)" style="display: block;width: 100%;height: 100%;position: absolute;opacity: 0;left: 0;top: 0;cursor: pointer;"/>
				</div>
				<a href="javascript:void(0)" class="dialog_link close" @click="hideMaterialLibPic()">&times;</a>
			</div>
			<div class="dialog_main lib_con">
				<div class="lib_main ps-pic">
					<div class="content">
						<div class="lib_main_head">
							<ul class="lib_main_head_group">
								<li><span>管理</span></li>
							</ul>
							<ul class="lib_main_head_group" style="display: none;">
								<li><span>删除</span></li>
								<li><span>退出管理</span></li>
							</ul>
						</div>
						<div class="lib_main_body" v-if="materialLibPicObj.type=='IMG.PIC'||materialLibPicObj.type=='IMG.BG'">
							<ul class="pics_con" >
								<li v-for="item in list" >
									<img :src="item.file_path" @click="addPicOrBg(item.file_path,materialLibPicObj.type)">
								</li>
							</ul>
							<m-pagination :pagination-conf="paginationConf"></m-pagination>
						</div>
						<div class="lib_main_body" v-if="materialLibPicObj.type=='GRAPHIC'">
							<ul class="pics_con graphic" >
								<li>
									<div style="border:2px solid rgb(0, 188, 212);width:100px;height:100px;margin:30px auto;" @click="addDomElement('GRAPHIC.RECT')" ></div>
								</li>
								<li>
									<div style="border:2px solid rgb(0, 188, 212);border-radius:50%;width:100px;height:100px;margin:30px auto;" @click="addDomElement('GRAPHIC.CIRCLE')"></div>
								</li>
							</ul>
						</div>
						<div class="lib_main_body" v-if="materialLibPicObj.type=='PLUGIN'">
							<ul class="pics_con" >
								<li>
									<div style="position:relative;"  @click="addDomElement('PLUGIN.CAROUSEL')">
										<img src="../../../img/plugin/viewcarousel.png" style="left:0;top:0;transform: none;">
                                        <p>轮播图</p>
									</div>
								</li>
								<li>
									<div style="position:relative;"  @click="openDialog">
										<img src="../../../img/plugin/viewcarousel.png" style="left:0;top:0;transform: none;">
										<p>轮播图</p>
									</div>
								</li>
							</ul>
						</div>
                        <div class="lib_main_body" v-if="materialLibPicObj.type=='VIDEO'">
                            <ul class="video">
                                <li v-for="item in list" >
                                    <video :src="item.file_path" controls >您的浏览器不支持 video 标签。</video>
                                    <p>{{item.file_name}}</p>
                                    <span @click.stop="addDomElement('VIDEO',{src:item.file_path})" class="use">使用</span>
                                    <span >{{item.file_size | FileSize}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="lib_main_body" v-if="materialLibPicObj.type=='AUDIO'">
                            <ul class="audio">
                                <li v-for="item in list" >
									<audio :src="item.file_path" controls>Your browser does not support the audio element.</audio>
                                    <p>{{item.file_name}}</p>
                                    <span>{{item.file_size | FileSize}}</span>
									<div class="use" @click.stop="addDomElement('AUDIO',{src:item.file_path})">使用</div>
                                </li>
                            </ul>
                        </div>
					</div>
				</div>
			</div>
			<div class="dialog_bottom">
				<ul class="dialog_btn">
					<li @click="hideMaterialLibPic()">取消</li>
					<li @click="ok()">确认</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
var Vue = require('Vue');
var $ = require('jQuery');
var utils = require('utils');
var ps = require('perfect-scrollbar');

var Router = require('vue-route');
Vue.use(Router);
var router = new Router();

var store = require('../../store/store.js');
var actions = require('../../store/action/index.js');

var tips = require('../../directive/tips.js');

var Pagination = require('../common/pagination.vue');
import BTN from '../common/meta/button.vue';

var MaterialLibPicVm = null;
export  default {
	name:'MaterialLibPic',
	data: function(){
		var this_ = this;
		return {
		    apiType:'video|img|audio',
			list: [],
			paginationConf: {
				currentPage: 1,
				totalItems: 0,
				itemsPerPage: 7,
				pagesLength: 5,
				onChange: function(type){
					MaterialLibPicVm.load.call(this_,MaterialLibPicVm.paginationConf.currentPage,this_.filterType(this_.materialLibPicObj.type));
				}
			}
		}
	},
	init: function(){
		MaterialLibPicVm = this;
	},
    watch:{
	    'materialLibPicObj.show':function (val,oldVal) {
            if(val&&this.$data.apiType.split('|').indexOf(this.materialLibPicObj.type.split('.')[0].toLowerCase())>-1){
                this.load(this.paginationConf.currentPage,this.filterType(this.materialLibPicObj.type))
            }
        }
    },
	created: function(){
//		this.load(this.paginationConf.currentPage,this.type);
	},
	components:{
		'm-pagination': Pagination,
		'm-btn':BTN
	},
	ready:function () {
		document.querySelector('.ps-pic') && ps.initialize(document.querySelector('.ps-pic'));
	},
	props: ['loading'],
	vuex: {
	  	getters: {
	  		materialLibPicObj: function(){
	  			return store.state.materialLibPicObj
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
        filterType:function (type) {
            switch (type.split('.')[0]){
                case 'VIDEO':type = 'video';break;
                case 'IMG':type = 'img';break;
//                case 'BG':type = 'img';break;
                case 'AUDIO':type = 'audio';break;
            }
            return type;
        },
		hideMaterialLibPic: actions.hideMaterialLibPic,
		addPicOrBg: actions.addPicOrBg,
		addDomElement:actions.addDomElement,
		uploader: function(ev){
			var files = {};
			if(ev.target.files.length==0)return;
			if(ev.target.files.length > 6){
				/*actions.alert(store,{
					show: true,
					msg: '一次最多上传6张！超出图片本次不会上传',
					type: 'warning'
				});*/
				for(var i = 0;i < 6;i++){
					files[i] = ev.target.files[i];
				}
			}else{
				files = ev.target.files;
			}
			var formData = new FormData();
			for(var item in files){
				formData.append('files', files[item]);
			}
			var type = this.filterType(this.materialLibPicObj.type);
            if(this.apiType.split('|').indexOf(type)==-1)return;
			var _this = this;
			_this.loading = true;
			$.ajax({
				url: '/api/'+type+'/upload',
				type: 'post',
				cache: false,
			    data: formData,
			    processData: false,
			    contentType: false,
				success: function(data){
					_this.loading = false;
					actions.alert(store,{
						show: true,
						msg: data.msg,
						type: 'success'
					});
					_this.paginationConf.currentPage = 1;
					_this.paginationConf.onChange(type);
				},error:function (e) {
                    console.log(e);
                }
			})
		},
        load: function(page,type){
			var _this = this;
			$.ajax({
				url: '/api/'+(type||_this.type)+'/list',
				type: 'get',
				data: {
					page: page
				},
				success: function(data){
					_this.list = data.data.list;
					_this.paginationConf.totalItems = data.data.totalItems;
				}
			})
		},
        play:function (ev,type) {
//            $(ev.target)
        },
        stop:function (ev,type) {
            
        }
	}
};

//module.exports = MaterialLibPic;

</script>