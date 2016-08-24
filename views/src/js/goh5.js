'use strict';

var Swiper = require('Swiper');
var utils = require('utils');
var ani = require('./animate.js');

new Vue({
    el:'#app',
    data:datas,
});



var defaultConfig = datas.setConfig;

// arrow位置
if (defaultConfig.direction == 'horizontal') {
    utils.$('#arrow').addClass('horizontal_arrow');
} else if (defaultConfig.direction == 'vertical') {
    utils.$('#arrow').addClass('vertical_arrow');
}

var isInited = false; // swiper的bug，不是初始页的时候会出发slidechangeend事件
var setConfig = {
    direction: defaultConfig.direction,
    loop: defaultConfig.loop,
    effect: defaultConfig.effect,
    noSwiping: true,
    noSwipingClass: 'swipe-no-swiping',
    onInit: function(swiper){
    	ani.swiperAnimateCache(function(){
	    	ani.swiperAnimate(swiper);
	    	isInited = true;
    	});
    },
    onSlideChangeEnd: function(swiper){
    	if(isInited){
    		ani.swiperAnimate(swiper);    		
    	}
    }
};

// 初始页面
setConfig.initialSlide = defaultConfig.autoBackPrePage ? (utils.getCookie('initialSlide') ? (setConfig.loop ? Number(utils.getCookie('initialSlide')) - 1 : Number(utils.getCookie('initialSlide'))) : 0) : 0;

function Layout(){
    this.$container = $('#wrapAll');
    this.init();
}

Layout.prototype ={
    init:function () {
        var self = this;
        $('body').on('contextmenu', function () {
            window.event.returnValue = false;
            return false;
        });
        self.initLayout();
        $(window).resize(function () {
            self.initLayout();
        });
    },
    initLayout:function () {
        var self = this;
        self.$container.width(1080/1920 * self.$container.height());
    }
};

$(function () {
    new Layout();

});


var H5Editor = new Swiper('.swiper-container', setConfig);
H5Editor.on('slideChangeEnd', function(swiper) {
    if(defaultConfig.autoBackPrePage){
        utils.setCookie('initialSlide', swiper.activeIndex, 2);
    }
});

window.H5Editor = H5Editor;
window.utils = utils;
// window.$ = utils.$;



// for debug




module.exports = H5Editor;