'use strict';
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../store/store.js');
var actions = require('../store/action/index.js');

var utils = require('utils');

Vue.directive('dragItem', function() {
    var _this = this;
    var target = this.el;
    var draging = false;
    console.log('A')
    $('body').on('mousedown','.j_screen',function (e) {
        console.log(e.target);
    });
    // 拖动元素'.j_screen>div .content',
    $('body').on('mousedown','.j_screen',function(ev) {
        console.log(ev.target);
        if($(ev.target).hasClass('edit_mode')){
        // return;
        // if($('.j_screen>div').eq(store.state.checkedItems[0]).find('.content>div').attr('contenteditable') === 'true'){
            return;
        }else{
            draging = true;
        }
        var conWidth = parseFloat($('.j_screen').css('width'));
        var conHeight = parseFloat($('.j_screen').css('height'));

        var preClientX = ev.clientX;
        var preClientY = ev.clientY;

        var itemLeft = {},
            itemTop = {};
        var k = 0;
        $(window).bind('mousemove', function(ev) {
            console.log(draging);
            if(draging){
                for (var i = 0; i < store.state.checkedItems.length; i++) {

                    var obj = $('.j_screen').children().eq(store.state.checkedItems[i]);

                    itemLeft[i] = itemLeft[i] ? itemLeft[i] : (isNaN(parseFloat(obj.css('left'))) ? 0 :parseFloat(obj.css('left')));
                    itemTop[i] = itemTop[i] ? itemTop[i] : (isNaN(parseFloat(obj.css('top'))) ? 0 :parseFloat(obj.css('top')));

                    var difX = ev.clientX - preClientX;
                    var difY = ev.clientY - preClientY;

                    var x = difX + itemLeft[i];
                    var y = difY + itemTop[i];

                    var alertMsg = {
                        show: true,
                        msg: '超出屏幕外的元素将不可见',
                        type: 'warning'
                    }

                    if (x < 0 || y < 0 || parseFloat(obj.outerWidth()) + parseFloat(obj.css('left')) > conWidth || parseFloat(obj.outerHeight()) + parseFloat(obj.css('top')) > conHeight) {
                        if (!store.state.alertObj.show) {
                            actions.alert(store, alertMsg);
                        }
                    }
                    actions.setStyle(store, store.state.checkedItems[i], {
                        left: x + 'px',
                        top: y + 'px'
                    })
                }
            }

            return false;
        });
        $(window).bind('mouseup', function() {
            draging = false;
            $(window).unbind('mousemove');
            $(window).unbind('mouseup');
        });
    })
});
