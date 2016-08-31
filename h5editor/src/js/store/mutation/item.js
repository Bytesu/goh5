'use strict';

var mutations = {};

var tpl = require('../../template/tpl.js');
var utils = require('utils');
/**
 * add text dom element
 * @param state
 * @constructor
 */
mutations.ADDTEXT = function(state) {
    var index = state.currentPageData.items.length + 1;
    var num = utils.getAllItemsLen() + 1;
    var model = tpl.txt(index, num, {});
    state.currentPageData.items.push(model);
    mutations.SELECTITEM(state, index - 1);
};

/**
 * change text
 * @param state
 * @param html
 * @param itemIndex
 * @constructor
 */
mutations.CHANGETEXT = function(state, html, itemIndex) {
    // state.currentPageData.items[itemIndex].content = state.currentPageData.items[itemIndex].content.replace(/\>[\s\S]+\</, '>' + html + '<');
    state.currentPageData.items[itemIndex].content = html;
};

/**
 * add dom element to current page
 * @param store
 * @param type 'element type'
 * @param obj  element options
 */
mutations.ADDDOMELEMENT = function(state, type, obj) {
    state.checkedItems = [];
    var index = state.currentPageData.items.length + 1;
    var num = utils.getAllItemsLen() + 1;
    var model = {};
    if (type === 'PIC') {
        model = tpl.pic(0.1, num, obj);
    } else if (type === 'BG') {
        model = tpl.pic(0.1, num, obj);
    }else if(type=='GRAPHIC.CIRCLE'){
        model = tpl.graphic_circle(index, num, {});
    }else if(type=='GRAPHIC.RECT') {
        model = tpl.graphic_rect(index, num, obj);
    }else if(type=='PLUGIN.CAROUSEL'){
        model = tpl.plugin_carousel(index, num, obj);
    }else if(type=='VIDEO'){
        model = tpl.video(index, num, obj);
    }else if(type=='AUDIO'){
        model = tpl.audio(index, num, obj);
    }
    state.currentPageData.items.push(model);
    mutations.SELECTITEM(state, index - 1);
};

/**
 * add pic or bg
 * @param state
 * @param src
 * @param type
 * @constructor
 */
mutations.ADDPICORBG = function(state, src, type) {
    state.checkedItems = [];
    var index = state.currentPageData.items.length + 1;
    var num = utils.getAllItemsLen() + 1;
    var model = null;
    if (type === 'IMG.PIC') {
        model = tpl.pic(num, num, {
            src: src
        });
    } else if (type === 'IMG.BG') {
        model = tpl.pic(0.1, num, {
            src: src
        });
    }
    state.currentPageData.items.push(model);
    mutations.SELECTITEM(state, index - 1);
};

mutations.DELBG = function(state) {
    state.currentPageMain.background = '#fff';
};

mutations.ADDBGMUSIC = function(state, src, name) {
    state.mainCode.wholeAttr.bgmusic = src;
    state.mainCode.wholeAttr.bgmusicName = name;
};

mutations.DElBGMUSIC = function(state) {
    state.mainCode.wholeAttr.bgmusic = '';
    state.mainCode.wholeAttr.bgmusicName = '';
};

mutations.SELECTITEM = function(state, index, multi) {
    if (multi) {
        state.checkedItems.push(index);
    } else {
        state.checkedItems = [];
        state.checkedItemDataOnlyOne = state.currentPageData.items[index];
        state.checkedItems.push(index);
    }
};

mutations.CLEARCHECKEDITEMS = function(state, index, multi) {
    state.checkedItems = [];
};

mutations.DELITEM = function(state) {
    var result = [];
    for (var i = 0; i < state.checkedItems.length; i++) {
        var result = [];
        delete state.currentPageData.items[state.checkedItems[i]];
    }
    for (var i = 0; i < state.currentPageData.items.length; i++) {
        if (state.currentPageData.items[i] !== undefined) {
            result.push(state.currentPageData.items[i]);
        }
    }
    state.currentPageData.items = result;
}


module.exports = mutations;
