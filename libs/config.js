/**
 * Created by byte2 on 2016-08-30.
 */
var config = {

    port: 3030,
    isPro:process.argv[2]=='dev'?false:true,
    session: {
        secret: "i_,H5aUhFmi,$o*D?tItCx|!Js/)vcX0-U;`8NQ{'Exr'bM6Sq2G>t_AWH`H",
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
        saveUninitialized: true,
        resave: true
    },
    redisSession: {
        resave: false,//添加这行
        saveUninitialized: true,//添加这行
        host: {
            host: "localhost",
            port: 6379,
            db: 3
        },
        // store: new RedisStore(config.REDIS.host),
        secret: "H5aUhFmi,$o*D?tItCx|!Js/)vcX0-U;`8NQ{'Exr'b"
    },
    isDebug: false,
    mongodb: 'mongodb://localhost:27017/goh5',
    amdox: {
        admin: {
            upload: 'http://139.196.242.180/show-info/upload.json', //节目上传目录
            // upload: 'http://192.168.1.105:8080/show-info/upload.json', //节目上传目录
            redirect: function (obj) {
                if (!obj.userid || !obj.fileid) throw new Error('invalid arguments !');
                return "http://192.168.1.105:8080/show-info/create-showfile/" + obj.userid + "&" + obj.fileid;
            },
        }
    }
};

if (process.argv[2]=='dev') { // 开发服务器
    config.isDebug = true;
    config.amdox.admin.upload = 'http://192.168.1.106:8080/show-info/upload.json'; //节目上传目录;
    config.amdox.admin.redirect = function (obj) {
        if (!obj.userid || !obj.fileid) throw new Error('invalid arguments !');
        return "http://192.168.1.106:8080/show-info/create-showfile/" + obj.userid + "&" + obj.fileid+'&showname='+obj.showname;
    }
}else if(process.argv[2]=='dev110'){ // 110服务器
    config.isDebug = true;
    config.amdox.admin.upload = 'http://192.168.1.110/show-info/upload.json'; //节目上传目录;
    config.amdox.admin.redirect = function (obj) {
        if (!obj.userid || !obj.fileid) throw new Error('invalid arguments !');
        return "http://192.168.1.110/show-info/create-showfile/" + obj.userid + "&" + obj.fileid+'&showname='+obj.showname;
    }
}

module.exports = config;