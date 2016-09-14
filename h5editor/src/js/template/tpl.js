/**
 * Created by byte2 on 2016-08-18.
 */
'use strict';
// 必需两个参数 index:当前页元素个数，为了层级
//             num:所有元素个数，为了id
module.exports = {
    txt: function(index, num, params) {
        return {
            type: 'TXT',

            style:{
                zIndex:index*10,
                width:'50%',
                height:'auto',
                top:'0px',
                left:'0px',
                fontSize:'1em',
                boxSizing:'border-box',
                position:'absolute',
                opacity:1,
            },
            styleObj:{
                width:'100%',
                height:'auto',
                fontWeight:'normal',
                fontStyle:'normal',
                textDecoration:'none',
                textAlign:'left',
                overflow:'hidden',
                fontSize:'14px',
                fontFamily:"'Helvetica Neue', Helvetica, STHeiTi, sans-serif",
                boxSizing:'border-box',
                textShadow:'none',
                display:'block',
                animation:'none 1s',
                backgroundColor:'transparent',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)',
                color:'#010101',
                lineHeight:'1.5',
                padding:'5px',
            },
            class: params.className ? params.className : '',
            id: 'EDITOR-TEXT-' + num,
            attr: {},
            content: '双击编辑文本'
        };
    },
    pic: function(index, num, params) {
        return {
            type: 'IMG',
            style: {
                zIndex:index*10,
                width:'30%',
                top:0,
                left:0,
                height:'auto',
                boxSizing:'border-box',
                position:'absolute'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            class: params.className ? params.className : '',
            id: 'EDITOR-IMG-' + num,
            attr: {},
            content:  params.src
        };
    },
    pics: function(index, num, params) {
        return {
            type: 'PICS',
            style: {
                zIndex:index*10,
                width:'30%',
                top:0,
                left:0,
                height:'auto',
                boxSizing:'border-box',
                position:'absolute'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            // class: params.className ? params.className : '',
            id: 'EDITOR-PICS-' + num,
            attr: {},
            content:  params
        };
    },
    graphic_circle:function (index, num, obj) {
        return {
            type: 'GRAPHIC',
            style: {
                zIndex:index*10,
                top:0,
                left:0,
                width:'10%',
                height:'10%',
                boxSizing:'border-box',
                position:'absolute',
                background:'transparent'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                border:'3px solid #00bcd4',
                borderRadius:'50%',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            id: 'EDITOR-GRAPHIC-' + num
        };
    },
    graphic_rect: function(index, num, obj) {
        return {
            type: 'GRAPHIC',
            style: {
                zIndex:index*10,
                top:0,
                left:0,
                width:'100px',
                height:'100px',
                boxSizing:'border-box',
                position:'absolute'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                border:'3px solid #00bcd4',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            id: 'EDITOR-GRAPHIC-' + num,

        };
    },

    video: function(index, num, params) {
        return {
            type: 'VIDEO',
            style: {
                zIndex:index*10,
                top:0,
                left:0,
                width:'100%',
                height:'auto',
                boxSizing:'border-box',
                position:'absolute'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            id: 'EDITOR-VIDEO-' + num,
            content:params.src
        };
    },
    audio: function(index, num, params) {
        return {
            type: 'AUDIO',
            style: {
                zIndex:index*10,
                top:0,
                left:0,
                width:'100px',
                height:'100px',
                boxSizing:'border-box',
                position:'absolute'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                display:'block',
            },
            id: 'EDITOR.AUDIO-' + num,
            content:params.src
        };
    },
    plugin_carousel: function(index, num, obj) {
        return {
            type: 'PLUGIN',
            style: {
                zIndex:index*10,
                top:0,
                left:0,
                width:'100px',
                height:'100px',
                boxSizing:'border-box',
                position:'absolute'
            },
            styleObj:{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                border:'3px solid #00bcd4',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            id: 'EDITOR-PLUGIN-' + num,
        };
    },
};
