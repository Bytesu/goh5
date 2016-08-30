
<style>
	.lib_con{display: flex;flex-direction: row;}
	.lib_con .lib_list{width: 200px;display: flex;flex-direction: column;}
	.lib_con .lib_list .group{flex: 1;margin-top: 0px;}
	.lib_con .lib_list .group li{border-bottom: 1px solid #ccd5db;background: #fff;width: 100%;padding: 0 0 0 20px;box-sizing: border-box;color: #76838f;font-size: 12px;height: 44px;line-height: 44px;cursor: pointer;}
	.lib_con  .upload_btn{width: auto;height: 28px;line-height: 28px;font-size: 14px;color: #fff;text-align: center;background: #00BCD4;position: relative;display: inline-block;padding: 0px 10px;float: right;margin: 10px 32px 0 32px;cursor: pointer;}
	.lib_con .lib_main{flex: 1;background: #fff;margin-top: 0px !important;border-top-left-radius: 6px;padding: 0 15px;overflow: auto;position: relative;}
	.lib_con .lib_main .lib_main_head{width: 100%;height: 28px !important;border-bottom: 1px solid #ccd5db;display: flex;justify-content: flex-end;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group{font-size: 0;height: 28px !important;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group li{display: inline-block;vertical-align: middle;font-size: 12px;line-height: 28px !important;margin: 0 5px;padding: 0 10px;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group li span{cursor: pointer;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;color: #76838f;}
	.lib_con .lib_main .lib_main_head .lib_main_head_group li span:hover{color: #00bcd4;}
	.lib_con .lib_main .lib_main_body .pics_con{font-size: 0;}
	.lib_con .lib_main .lib_main_body .pics_con li{border:1px solid #ccc;display: inline-table;vertical-align: top;width: 31%;margin: 10px 1% 0;position: relative;overflow: hidden;padding-bottom: 31%;background: #ddd;cursor: pointer;}
	.lib_con .lib_main .lib_main_body .pics_con li:hover{    box-shadow: 0 0 8px #999;background-color: #fff;cursor: pointer;}
	.lib_con .lib_main .lib_main_body .pics_con.graphic li{margin-bottom: 0;background: none;border: none;padding-bottom: 0;}
	.lib_con .lib_main .lib_main_body .pics_con li img{display: block;position: absolute;top: 50%;left: 50%;width: 100%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);}

</style>
<template>
	<div class="dialog_con lib_con" v-show="materialLibPicObj.show" transition="fade">
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
						<div class="lib_main_body" v-if="materialLibPicObj.type=='PIC'||materialLibPicObj.type=='BG'">
							<ul class="pics_con" >
								<li v-for="item in list" >
									<img :src="'/img/'+item.file_name" @click="addPicOrBg('/img/'+item.file_name,materialLibPicObj.type)">
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
							</ul>
						</div>
                        <div class="lib_main_body" v-if="materialLibPicObj.type=='VIDEO'">
                            <ul class="music_list">
                                <li v-for="item in list" >
                                    <p>{{item.file_name}}</p>
                                    <a href="javascript:void(0)" :res-src="item.file_path"  @click.stop="play($event,'video')">播放</a>
                                    <span>{{item.file_size | FileSize}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="lib_main_body" v-if="materialLibPicObj.type=='AUDIO'">
                            <ul class="music_list">
                                <li v-for="item in list" >
                                    <p>{{item.file_name}}</p>
                                    <a href="javascript:void(0)" :res-src="item.file_path"  @click.stop="play($event,'video')">播放</a>
                                    <span>{{item.file_size | FileSize}}</span>
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

var MaterialLibPicVm = null;
var MaterialLibPic = Vue.extend({
	name:'MaterialLibPic',
	data: function(){
		return {
		    apiType:'video|img|audio',
			list: [],
			paginationConf: {
				currentPage: 1,
				totalItems: 0,
				itemsPerPage: 7,
				pagesLength: 5,
				onChange: function(type){
					MaterialLibPicVm.load(MaterialLibPicVm.paginationConf.currentPage,this.materialLibPicObj.type);
				}
			}
		}
	},
	init: function(){
		MaterialLibPicVm = this;
	},
    watch:{
	    'materialLibPicObj.show':function (val,oldVal) {
	        console.log(this.materialLibPicObj.type);
            if(val&&this.$data.apiType.split('|').indexOf(this.materialLibPicObj.type.toLowerCase())>-1){
                this.load(this.paginationConf.currentPage,this.filterType(this.materialLibPicObj.type))
            }
        }
    },
	created: function(){
//		this.load(this.paginationConf.currentPage,this.type);
	},
	components:{
		'm-pagination': Pagination
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
	  	actions: actions
	},
	methods:{
        filterType:function (type) {
            switch (type){
                case 'VIDEO':type = 'video';break;
                case 'PIC':type = 'img';break;
                case 'BG':type = 'img';break;
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
					_this.list = data.data.imgList;
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
});

module.exports = MaterialLibPic;

</script>