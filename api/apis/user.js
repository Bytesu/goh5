'use strict';
var md5 = require('md5');
var safeWord = "H5aUhFmi,$o*D?tItCx|!Js/)vcX0-U;`8NQ{'Exr'bM6Sq2G>t_AWH`H";
var logger = require('./../../libs/log').logger;

var login = function(req, res) {
    var obj = req.query;
    var User = global.dbHandel.getModel('user');
    var conditions = { 'user_name': obj.user_name };
    if(obj.credentials){
        conditions.credentials = obj.credentials;
    }
    User.find(conditions).exec(function(err, doc) {
        if (doc == '') {
            var resData = {
                iserro: 1,
                msg: '用户不存在！',
                data: {
                    target: 'user_name'
                }
            };
            res.send(resData);
        } else {
            logger.error(obj.credentials);
            if(obj.credentials){
                req.session.isLogin = 1;
                logger.info(obj.user_name);
                req.session.user_name = obj.user_name;
                req.session.noneedPassword = 1;
                res.cookie('isLogin', 1, { expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7) });
                var resData = {
                    iserro: 0,
                    msg: '登录成功！',
                    data: obj,
                };
                res.send(resData);
            }else if (doc[0].password == md5(safeWord + obj.password)) {
                req.session.isLogin = 1;
                req.session.user_name = obj.user_name;
                if (obj.noneedPassword == 'true') {
                    req.session.noneedPassword = 1;
                    res.cookie('isLogin', 1, { expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7) });
                } else {
                    req.session.noneedPassword = 0;
                    res.cookie('isLogin', 1, { expires: new Date(Date.now() + 10000 * 60 * 60 * 2) });
                }
                var resData = {
                    iserro: 0,
                    msg: '登录成功！',
                    data: obj,
                };
                res.send(resData);
            } else {
                var resData = {
                    iserro: 1,
                    msg: '密码错误！',
                    data: {
                        target: 'password'
                    }
                };
                res.send(resData);
            }
        }
    })
};

var signup = function(req, res) {
    var obj = req.query;
    var User = global.dbHandel.getModel('user');
    var user = { 'user_name': obj.user_name };
    obj.credentials && (user.credentials=obj.credentials);
    User.find(user).exec(function(err, doc) {
        if (doc != '') {
            var resData = {
                iserro: 1,
                msg: '用户已存在！',
                data: {
                    target: 'user_name'
                }
            };
            res.send(resData);
        } else {
            if(user.credentials){
                user.password = md5(safeWord + '123456')
            }else{
                user.password = md5(safeWord + obj.password)
            }
            User.create(user, function(err, doc) {
                if (err) {
                    var resData = {
                        iserro: 1,
                        msg: err,
                        data: ''
                    };
                    res.send(resData);
                } else {
                    var resData = {
                        iserro: 0,
                        msg: '注册成功！',
                        data: obj
                    };
                    res.send(resData);
                }
            })
        }
    })
}

var logout = function(req, res) {
    req.session.isLogin = 0;
    req.session.user_name = null;
    res.cookie('isLogin', 0, { expires: 0});
    var resData = {
        iserro: 0,
        msg: '注销成功！',
        data: ''
    };
    res.send(resData);
};

// act:login/sinup/logout
module.exports = function(Router) {
    Router.get('/user/:act', function(req, res, next) {
        if (req.params.act == 'login') {
            login(req, res);
            return;
        }
        if (req.params.act == 'signup') {
            signup(req, res);
            return;
        }
        if (req.params.act == 'logout') {
            logout(req, res);
            return;
        }
    });
    return Router;
};
