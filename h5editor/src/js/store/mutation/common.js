'use strict';
var $ = require('jQuery');

var mutations = {};

mutations.ALERT = function(state, params) {
    state.alertObj.show = params.show;
    state.alertObj.msg = params.msg || '提示信息';
    state.alertObj.type = params.type || 'info';  // info/warning/success/danger
};

mutations.HIDEALERT = function(state) {
    state.alertObj.show = false;
};

mutations.CONFIRM = function(state, params) {
    state.confirmObj.show = params.show;
    state.confirmObj.msg = params.msg || '提示信息';
    state.confirmObj.event = params.event || null;
};
mutations.HIDECONFIRM = function(state) {
    state.confirmObj.show = false;
};

mutations.MATERIALLIBPIC = function(state, params) {
    state.materialLibPicObj.show = params.show;
    state.materialLibPicObj.msg = params.msg || '素材库';
    state.materialLibPicObj.type = params.type || 'pic';
};

mutations.HIDEMATERIALLIBPIC = function(state) {
    state.materialLibPicObj.show = false;
};

mutations.MATERIALLIBMUSIC = function(state, params) {
    state.materialLibMusicObj.show = params.show;
    state.materialLibMusicObj.msg = params.msg || '素材库';
    state.materialLibMusicObj.type = params.type || 'pic';
};

mutations.HIDEMATERIALLIBMUSIC = function(state) {
    state.materialLibMusicObj.show = false;
};

/**
 * component section begin !
 */
mutations.CLOSE_COMPONENT = function(state) {
    state.dialog.components.show = false;
};

mutations.OPEN_COMPONENT = function(state) {
    state.dialog.components.show = true;
};

/**
 * component section end !
 */
/**
 * component section begin !
 */
mutations.CLOSE_DIALOG = function(state) {
    state.dialog.custom.show = false;
};

mutations.OPEN_DIALOG = function(state) {
    state.dialog.custom.show = true;
};
mutations.ADD_SELECTED_PIC = function(state,item) {
    if(item.delete){ //type is delete
        delete state.pics.selected[item.key];
    }else{
        state.pics.selected[item.key] = item.value;
    }

};
mutations.SELECT_PICS = function(state) {
    //state.dialog.custom.show = true;
   /* $.ajax({
        url: '/api/img/list',
        type: 'get',
        data: {
            page: page
        },
        success: function(data){
            _this.list = data.data.list;
            _this.paginationConf.totalItems = data.data.totalItems;
        }
    })*/
};

/**
 * component section end !
 */
module.exports = mutations;
