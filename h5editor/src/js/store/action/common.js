'use strict';

var actions = {};

actions.alert = function(store, params) {
    store.dispatch('ALERT', params);
    setTimeout(function() {
        store.dispatch('HIDEALERT');
    }, 2500);
};

actions.confirm = function(store, params) {
	store.dispatch('CONFIRM', params);
};
actions.hideConfirm = function(store) {
	store.dispatch('HIDECONFIRM');
};

actions.materialLibPic = function(store,params){
	store.dispatch('MATERIALLIBPIC', params);
};

actions.hideMaterialLibPic = function(store){
	store.dispatch('HIDEMATERIALLIBPIC');
};

actions.materialLibMusic = function(store,params){
	store.dispatch('MATERIALLIBMUSIC', params);
};

actions.hideMaterialLibMusic = function(store){
	store.dispatch('HIDEMATERIALLIBMUSIC');
};

/**
 * close component dispatch
 * @param store
 */
actions.closeComponent = function(store){
	store.dispatch('CLOSE_COMPONENT');
};

/**
 * open component dispatch
 * @param store
 */
actions.openComponent = function(store){
	store.dispatch('OPEN_COMPONENT');
};

/**
 * close custom dialog dispatch
 * @param store
 */
actions.closeDialog = function(store){
	store.dispatch('CLOSE_DIALOG');
};

/**
 * open custom dialog dispatch
 * @param store
 */
actions.openDialog = function(store){
	store.dispatch('OPEN_DIALOG');
};

actions.selectPics = function(store){
	store.dispatch('SELECT_PICS');
};


actions.addSelectedPic = function (store,item) {
	store.dispatch('ADD_SELECTED_PIC',item);
};




module.exports = actions;
