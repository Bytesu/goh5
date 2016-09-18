/**
 * Created by byte2 on 2016-08-30.
 */
var config = {

    port: 3030,
    session: {
        secret: "i_,H5aUhFmi,$o*D?tItCx|!Js/)vcX0-U;`8NQ{'Exr'bM6Sq2G>t_AWH`H",
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
        saveUninitialized: true,
        resave: true
    },
    isDebug: true,
    mongodb: 'mongodb://localhost:27017/goh5',
    amdox: {
        admin: {
            upload: 'http://192.168.1.105:8080/show-info/upload.json', //节目上传目录
            redirect: function (obj) {
                if (!obj.userid || !obj.fileid) throw new Error('invalid arguments !');
                return "http://192.168.1.105:8080/show-info/create-showfile/" + obj.userid + "&" + obj.fileid;
            },
        }
    }
};


if (process && process.env && process.env.os != "Windows_NT") { //production
    config.isDebug = false;
    config.amdox.admin.upload = 'http://139.196.242.180/show-info/upload.json'; //节目上传目录;
}

if (!config.isDebug) {
    config.amdox.admin.redirect = function (obj) {
        if (!obj.userid || !obj.fileid) throw new Error('invalid arguments !');
        return "http://192.168.1.105:8080/show-info/create-showfile/" + obj.userid + "&" + obj.fileid;
    }
}
module.exports = config;