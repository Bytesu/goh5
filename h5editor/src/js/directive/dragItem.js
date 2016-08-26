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
    // 拖动元素
    $('body').on('mousedown','.j_screen',function(ev) {
        if($(ev.target).hasClass('edit_mode')){
            console.log('return !!!');
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
                    };

                    if (x < 0 || y < 0 || parseFloat(obj.outerWidth()) + parseFloat(obj.css('left')) > conWidth || parseFloat(obj.outerHeight()) + parseFloat(obj.css('top')) > conHeight) {
                        if (!store.state.alertObj.show) {
                            actions.alert(store, alertMsg);
                        }
                    }
                    console.log($('.j_screen').width())
                    actions.setStyle(store, store.state.checkedItems[i], {
                        left: (x/$('.j_screen').width())*100 + '%',
                        top: (y/$('.j_screen').height())*100 + '%'
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
