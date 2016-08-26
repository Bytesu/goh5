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
            id: 'EDITOR.TEXT.NO.' + num,
            attr: {},
            content: '文本文本文本'
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
            id: 'GOH5.IMG.NO.' + num,
            attr: {},
            content:  params.src
        };
    },
    graphic: function(index, num, params) {
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
                width:'100px',
                height:'100px',
                boxSizing:'border-box',
                border:'1px solid gray',
                display:'block',
                backgroundColor:'rgba(0,0,0,0)',
                boxShadow:'0px 0px 0px 0px rgba(0,0,0,0)'
            },
            class: params.className ? params.className : '',
            id: 'GOH5.GRAPHIC.NO.' + num,
            attr: {},
            content:  '',
        };
    },
    video: function(index, num, params) {
        return {
            type: 'VIDEO',
            style: 'z-index:' + index * 10 + ';width:320px;top:0px;left:0px;box-sizing:border-box;position: absolute;',
            class: params.className ? params.className : '',
            id: 'GOH5.VIDEO.NO.' + num,
            attr: {},
            content: '<video style="width:100%;height:100%;box-sizing:border-box;background-color: rgba(0,0,0,0);box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);" data-vid="' + videoid + '" poster="' + pic_url + '" controls="controls" preload="none" src="http://video.proc.sina.cn/video_explore/location.php?video_id=' + videoid + '">您的浏览器不支持video标签。</video>'
        };
    }
};
