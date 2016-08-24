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
                width:'100px',
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
            type: 'PIC',
            style: 'z-index:' + index * 10 + ';max-width:320px;top:0px;left:0px;box-sizing:border-box;position: absolute;',
            class: params.className ? params.className : '',
            id: 'GOH5.IMG.NO.' + num,
            attr: {},
            content: '<img style="width:100%;height:100%;box-sizing:border-box;display:block;background-color: rgba(0,0,0,0);box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);" src="' + params.src + '">'
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
