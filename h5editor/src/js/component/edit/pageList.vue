<style>

	.pages_con{position: fixed;background: #fff;display: flex;flex-direction:column;width: 230px;box-sizing: border-box;height: 100%;padding-bottom: 60px;top: 60px;left: 0;}
	.pages_con .item{display: flex;flex-direction: column;}
	.pages_con .head {height: 40px;line-height: 40px;text-align: center;color: #666;background: #f7f7f7;font-size: 16px;width: 100%;}
	.pages_con .item.pages_list {flex: 1;    border-right: 1px solid #eee;}
	.pages_con .item.pages_list .ps {position: relative;width: 230px;box-sizing: border-box;overflow: auto;flex:1;}
	.pages_con .item.pages_list ul.content{position: relative;width: 230px;padding: 0 20px;box-sizing: border-box;}
	.pages_con .item.pages_list ul li{display: block;
        padding: 20px 0;width: 190px;position: relative;
		height: 230px;}
	.pages_con .item.pages_list ul li .page-ctner{position: relative;
        position: relative;
		overflow: hidden;
		width: 360px;
		height: 640px;
        margin: 0px auto;
        box-shadow: 0 0 10px rgba(0,0,0,.4);
        background: #FFF;
		transform: scale(0.36);
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		transform: scale(0.36);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		left: 27px;
		top: -3px;
	}
	.pages_con .item.pages_list ul li:last-child{margin-bottom: 10px;}
	.pages_con .item.pages_list ul li.active {background: #97c6ec!important;color: #fff}
	.pages_con .item.pages_list .del_page{position: absolute;
		display: block;
		color: #e48f8f;
		font-size: 24px;
		right: 12px;
		top: 10px;
		z-index: 9;}
	.pages_con .item.pages_list .del_page.close{opacity: 0.8;box-shadow: none;text-shadow: none;}
	.pages_con .item.pages_list .del_page.close:hover{opacity: 1;
		color: #ff5151;}
	.pages_con .item.nav_bottom{width: 230px;text-align: center;height: 30px;background: #3f4a58;font-size: 16px;}
	.pages_con .item.nav_bottom a{color: #fff;display: block;cursor: pointer;line-height: 30px;}
	.pages_con .item.nav_bottom a img{display: inline-block;vertical-align: middle;margin-right: 10px;width: 16px;height: 16px;}
	.pages_con .item.nav_bottom a span{display: inline-block;vertical-align: middle;}

</style>
<template>
	<div class="pages_con left">
		<div class="item pages_list">
			<div class="head">页面列表</div>
			<div class="ps">
				<ul class="content">
					<li v-for="page in pagesData" :class="{'active':currentPage == $index+1}" @click="selectPage($index+1)">
						<!--<span>第{{$index+1}}页</span>-->
						<span class="del_page close" v-show="currentPage == $index+1" @click="delPage($index)">&times;</span>
						<div class="page-ctner">

							<div v-for="item in page.items" track-by="$index" :id="item.id" :class="item.class"
								 :style="item.style" >
								<div class="content" v-if="item.type=='TXT'">
									<div v-if="item.type=='TXT'" :style="item.styleObj">{{item.content}}</div>
								</div>
								<div v-if="item.type=='GRAPHIC'" :style="item.styleObj"></div>
								<img class="content" v-if="item.type=='IMG'" :style="item.styleObj" :src="item.content" />
							</div>

						</div>
					</li>
				</ul>
			</div>

		</div>
		<div class="item nav_bottom">
		    <a href="javascript:void(0)" title="添加新页" @click="addPage()"><img src="/back/dist/img/add_page.png"/><span>添加新页</span></a>
		</div>
	</div>
</template>



<script>

var Vue = require('Vue');
var $ = require('jQuery');
//require('perfect-scrollbar.css');
var ps = require('perfect-scrollbar');
var store = require('../../store/store.js');
var actions = require('../../store/action/index.js');

var pageList = Vue.extend({
	name: 'pageList',
	data: function(){
		return {
			pages: function () {
				return store.state.pagesData;
			}
		}
	},
	vuex: {
	  	getters: {
	  		pagesData: function(){
				return store.state.pagesData;
			},
		    currentPage: function(){
				return store.state.currentPage;
			}
	  	},
	  	actions: actions
	},
	created: function(){
//
	},
	ready:function () {
//		console.log(document.querySelector('.ps'));
		document.querySelector('.ps') && ps.initialize(document.querySelector('.ps'));
	},
	methods: {
		selectPage: actions.selectPage,
		addPage: actions.addPage,
		delPage: function(index){
			 actions.addPage(store, index);	
		}
	}

});

module.exports = pageList;

</script>