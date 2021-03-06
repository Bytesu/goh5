'use strict';

var Vue = require('Vue');
var Vuex = require('Vuex');
import pics from './modules/pics'
import createLogger from '../plugins/logger';
Vue.use(Vuex);

var state = {

    workData: '', //
    mainCode: '', //
    pagesData: '', //
    wholeAttr: '', //
    currentPage: 1, //
    currentPageData: '', //
    currentPageMain: '', //
    checkedItems: [], //
    checkedItemDataOnlyOne: '', //
    about: '', //
    setConfig: '', //设置配置
    dialog:{
        components:{
            show:false,
            list:[]
        },
        custom:{
            show:false,
        }
    },
    alertObj:{
        show: false,
        msg: '提示信息',
        type: 'info' // 四种样式 success/info/warning/danger
    },
    confirmObj:{
        show: false,
        msg: '提示信息',
        event: 'func'
    },
    materialLibPicObj: {
        show: false,
        msg: '素材库',
        type: 'pic' // pic:图片 bg:背景 pics:图集 and so on
    },
    materialLibMusicObj: {
        show: false,
        msg: '音乐库',
        type: 'bgMusic'
    },
    pics:{
        selected:{},
        list:[
            /*{
                src:'',
                click:function () {
                    
                },
            }*/
        ],

    },
    // plugins: process.env.NODE_ENV !== 'production'? [createLogger()]: []
};

var actions = require('./action/index.js');
var mutations = require('./mutation/index.js');

module.exports = new Vuex.Store({
    modules:{
        pics
    },
    state,
    mutations,
    actions,
    strict: true
});
