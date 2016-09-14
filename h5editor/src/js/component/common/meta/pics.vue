<style>
    .setting-bar:hover {
        box-shadow: 0 0 8px #999;cursor: pointer;
    }
    .setting-bar img{width: 80%;margin: 10% auto;}
    .setting-bar {
        position: absolute;
        width: 30px;
        height: 30px;
        background: #eee;
        cursor: pointer;
    }

    .img-section{
        position: absolute;
        top: 0;
        left: 0;right: 0;
        bottom: 0;}
    .setting-section{
        position: absolute;
        top: 0;
        right: 0;width: 30%;border-left: 1px solid #eee;
        bottom: 0;}
    .oper-section{    position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: #FFF;
        z-index: 9;}
    .oper-section .empty{    display: block;
        margin: 0 auto;
        /*margin-top: -100px;*/
        /*top: 50%;*/
        position: absolute;
        width: 100%;
        /*margin-left: -100px;*/
        /*left: 50%;*/
    }

    .pics_con{min-height: 407px;}
    .pics_con li{border:2px solid #f2f2f2;display: inline-table;vertical-align: top;width: 22%;margin: 10px 1% 0;position: relative;overflow: hidden;padding-bottom: 31%;cursor: pointer;transition: all 1s;}
    .pics_con li:hover{border:2px solid #2196F3; box-shadow: 0 0 8px #999;background-color: #fff;cursor: pointer;}
    .pics_con.graphic li{margin-bottom: 0;background: none;border: none;padding-bottom: 0;}
    .pics_con li img{display: block;position: absolute;top: 50%;left: 50%;width: 100%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);}
    .pics_con li div.check{
        height: 50px;
        position: absolute;
        top: auto;
        bottom: 0;
        background:rgba(0,0,0,0.5) url("/back/src/img/oper/round_check.png") no-repeat 100%;
        left: 0;
        right: 0;
        background-size: contain;
    }
    .pics_con li div.check.checked{background:rgba(0,0,0,0.5)  url("/back/src/img/oper/round_check_checked.png") no-repeat 100%;background-size: contain;}
    .pics_con li div.check img{width: 50px;}
    .pics_con li .tool-ctner {position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255,.8);
        height: 0px;
        transition: all 1s;}
    .pics_con li:hover .tool-ctner {height: 80px;}
    .pics_con li:hover .tool-ctner {height: 80px;}


    .pics-ctner{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;z-index: 10;
        background: #FFF;
    }

    .close-pics{
        position: absolute;

        right: 0;
        width: 100px;
    }
    .setting-content{margin-top: 30px;}
</style>
<template>
    <div class="oper-section">
        <img v-show="existValue" src="/back/src/img/oper/add.png" class="empty"  @click="animate='slideInLeft'" >
        <div v-else>
            <div class="img-section">

                <ul class="pics_con" style="max-width: 593px;">
                    <li>
                        <img  src="/back/src/img/oper/add.png" class="empty"  @click="addPics">
                    </li>
                    <li v-for="item in selected">
                        <img :src="item.url">
                    </li>

                </ul>
            </div>
            <div class="setting-section">
                <div class="setting-bar" title="隐藏"><img src="/back/src/img/oper/all.png"></div>
                <div class="setting-content">
                    <btn label="设置" cus-class="primary"></btn>
                </div>
                <div class="dialog_bottom">
                    <btn label="取消" cus-class="danger fr pos" @click="closeDialog"></btn>
                    <btn label="确定" cus-class="primary fr pos" @click="addDomElement('PICS',selected)"></btn>
                    <!--<btn label="确所选图片" cus-class="close-pics pos fr primary" @click="animate='slideOutRight'"></btn>-->
                </div>
            </div>

        </div>
    </div>
    <div class="pics-ctner animated" :class=" animate"  >
        <div style="height: 485px;">
            <ul class="pics_con" >
                <li v-for="item in pics">
                    <img data-id="{{item._id}}" :src="item.url" >
                    <div class="check"  :class="item.checked" @click="togglePic(item)">
                    </div>
                </li>
            </ul>
            <pagination :pagination-conf="paginationConf"></pagination>
            <!--<btn label="确定" cus-class="close-pics pos fr primary" @click="animate='slideOutRight'"></btn>-->
        </div>
        <div class="dialog_bottom">
            <!--<btn label="取消" cus-class="danger fr pos" @click="closeDialog"></btn>-->
            <!--<btn label="确定" cus-class="primary fr pos"></btn>-->
            <btn label="确定" cus-class="close-pics pos fr primary" @click="animate='slideOutRight'"></btn>
        </div>
    </div>
</template>
<script>
    var Vue = require('Vue');

    var $ = require('jQuery');
    var actions = require('../../../store/action/index.js');

    import Pagination from './../pagination.vue';
    import Btn from './button.vue';

    module.exports = Vue.extend({
        data:function(){
            var this_ = this;
            return {
                animate:'slideOutRight',
                list: [],
                selects:{},
                existValue:false,
                paginationConf: {
                    currentPage: 1,
                    totalItems: 0,
                    itemsPerPage: 7,
                    pagesLength: 5,
                    onChange: function(type){
                        this_.load(this_.paginationConf.currentPage);
                    }
                }
            }
        },
        vuex:{
            getters:{
                selected:function (state) {
                    return state.pics.pics.filter(function (item) {
                        return item.checked;
                    })
                },
                pics:function (state) {

                    return state.pics.pics;
                },

                dialog:state    => state.dialog.custom,
//                selected:state  => state.pics.selected,
            },
            actions:actions
        },
        computed:{
            isSelected:function (env) {
//                const pics = this.selects;
//                $(env.target).
//                pics.
            }
        },
        created:function () {
            this.load(this.paginationConf.currentPage)
        },
        /*watch:{
            'dialog.show':function (new_,old_) {
                if(new_){
                    this.load(this.paginationConf.currentPage)
                }
            },
            'selected':function (new_,old) {
                this.existValue = Object.keys(new_).length
            }
        },*/
        components:{
            Pagination,
            Btn
        },
        methods:{
            addDomElement:function (store) {
                store.dispatch('CLOSE_DIALOG');
                actions.addDomElement(arguments);
            },
            isSelected:function (_id) {
                return Object.keys(this.selects).join('|').indexOf(_id)>-1;
            },
            addSelected:function (item) {
                item.checked = item.checked?'':'active';
                /*if(!this.selects[obj.key]){
                    this.selects[obj.key] = obj.val;
                }else{
                    delete this.selects[obj.key];
                }*/

              console.log(this.selects)
            },
//            addSelectedPic:actions.addSelectedPic,
//            addSelectedPic:actions.addSelectedPic,
            /*selectpic:function (env) {
                var $img = $(env.target).siblings('img');
                this.selected[$img.data('id')] = $img.attr('src');
            },*/
            addpic:function () {

            },
            addPics:function () {
                this.animate = 'slideInLeft';
            },
            load: function(page){
                var _this = this;
                $.ajax({
                    url: '/api/img/list',
                    type: 'get',
                    data: {
                        page: page
                    },
                    success: function(data){
                        data.data.list.map(function (item,index) {
                            _this.addPic(item);
                        });
                        _this.paginationConf.totalItems = data.data.totalItems;
                    }
                })
            },
        }

    })
</script>
