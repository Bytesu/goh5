/**
 * Created by byte2 on 2016-09-02.
 */
import {
    ADD_PIC,DELETE_PIC,TOGGLE_PIC
} from './../mutation-types/pics'

/*
var CONST = require('../mutation-types/pics');
var ADD_PIC = CONST.ADD_PIC;
var DELETE_PIC = CONST.DELETE_PIC;
var TOGGLE_PIC = CONST.TOGGLE_PIC;
*/

export const addPic = makeAction(ADD_PIC);
export const deletePic = makeAction(DELETE_PIC);
export const togglePic = makeAction(TOGGLE_PIC);


function makeAction(type) {
    return ({dispatch},...args) => dispatch(type,...args);
}