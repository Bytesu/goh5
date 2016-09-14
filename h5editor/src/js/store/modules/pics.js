/**
 * Created by byte2 on 2016-09-02.
 */

var CONST = require('../mutation-types/pics');
var ADD_PIC = CONST.ADD_PIC;
var DELETE_PIC = CONST.DELETE_PIC;
var TOGGLE_PIC = CONST.TOGGLE_PIC;
// initial state
// shape: [{ id, quantity }]
const state = {
    pics: []
};

// mutations
const mutations = {
    [ADD_PIC] (state, obj) {

        state.pics.push({
            url:obj.file_path,
            id:obj._id,
            checked:'',
        });
    },
    [DELETE_PIC] (state,pic) {
        state.pics.splice(state.pics.indexOf(pic),1)
    },

    [TOGGLE_PIC] (state,todo) {
        todo.checked = todo.checked?'':'checked';
    }
};

export default {
    state,
    mutations
}
