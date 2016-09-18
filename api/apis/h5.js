/**
 * Created by byte2 on 2016-08-19.
 */

var _ = require('underscore');
var fs = require('fs');
var AdmZip = require('adm-zip');
var path = require('path');
var config = require('../../libs/config');
var util_file = require('./../libs/files');
var logger = require('./../../libs/log').logger;
function generatorScript(datas){
    return new Promise(function(resolve,reject){
        var imgDatas = JSON.stringify(datas).match(/(\/(\w|\-)+)+\.(jpg|png|jpeg|gif|webm|bmp|ogg|mp4)/gi);
        logger.info(imgDatas);
        imgDatas.map(function (item) {
            try{
                var stat = fs.statSync(path.join(__dirname+'/../../datas',(item)));
                if(stat.isFile()){
                    var readable  = fs.createReadStream(path.join(__dirname+'/../../datas/',(item)));
                    var wirtable = fs.createWriteStream(path.join(__dirname+'/../../','/views/dist/',(item)));
                    readable.pipe(wirtable);
                }
            }catch(e){
                logger.error(e);
            }
        });
        fs.writeFile(__dirname+'/../../views/dist/js/data.js', 'var datas = '+JSON.stringify(datas), (err) => {
            if (err){
                logger.error(err);
                return reject(err);
            }
            return resolve('success');
        });
    })
}
var readDir = util_file.readDir;
var judgeFileType = util_file.judgeFileType;

var Uploader = require('./../../libs/uploads');
var Zip = require("archiver");
module.exports = function(Router){
    Router.get('/upload/:id', function(req, res, next) {
        var id = req.params.id;
        var Work = global.dbHandel.getModel('work');
        Work.find({ '_id': id }).exec(function(err, docs) {

            generatorScript(docs[0]).then(function(){
                var tmpfile = path.join(__dirname + '/../../tmp/'+id+'.zip');
                var output = fs.createWriteStream(tmpfile);

                output.on('close', function() {
                    // console.log(archive.pointer() + ' total bytes');
                    console.log('archiver has been finalized and the output file descriptor has closed.');
                    var upload = new Uploader({url:config.amdox.admin.upload,path:tmpfile});
                    upload.upload().then(function (result) {
                        res.json({code:0,data:JSON.parse(result)})
                    }).catch(function (error) {
                        res.json({code:500,data:error})
                    })
                });
                var zip = Zip('zip');
                zip.on('error',function(err){
                    res.status(500).send({error: err.message});
                });
                zip.on('end', function() {
                    console.log('Archive wrote %d bytes', zip.pointer());
                });
                // res.attachment(id+'.zip');
                zip.pipe(output);
                var directories = [path.join(__dirname,'/../../views')]
                for(var i in directories) {
                    zip.directory(directories[i], directories[i].replace(path.join(__dirname, '/../../views'), ''));
                }
                zip.finalize();

            }).catch(function (e) {
                res.json(e);
            });
        })
    });
    Router.get('/zip/:id', function(req, res, next) {
        var id = req.params.id;
        var Work = global.dbHandel.getModel('work');
        Work.find({ '_id': id }).exec(function(err, docs) {

            generatorScript(docs[0]).then(function(){
                var zip = Zip('zip');
                zip.on('error',function(err){
                    res.status(500).send({error: err.message});
                });
                zip.on('end', function() {
                    console.log('Archive wrote %d bytes', zip.pointer());
                });
                res.attachment(id+'.zip');

                zip.pipe(res);

                var directories = [path.join(__dirname,'/../../views')]
                for(var i in directories) {
                    zip.directory(directories[i], directories[i].replace(path.join(__dirname, '/../../views'), ''));
                }

                zip.finalize();


            }).catch(function (e) {
                res.json(e);
            });
        })
    });
    var setConfigDefault = {
        loop: true,
        direction: 'vertical',
        autoBackPrePage: true,
        effect: 'slide'
    };

    var mainCodeDefault = {
        wholeAttr: {
            background: '#fff',
            bgmusic: '',
            bgmusicName: ''
        },
        pages: [{
            main: {
                background: '#fff',
                type: '',
                height: 486,
            },
            items: []
        }]
    };
    Router.get('/copy/:id', function(req, res, next) {
        var id = req.params.id;
        var Work = global.dbHandel.getModel('work');
        Work.find({ '_id': id }).exec(function(err, docs) {
            docs = docs[0];
            delete docs._id;
            docs.saveRecord = {};
            docs = {
                'user_name': docs.user_name,
                'title': docs.title+'_副本',
                'createTime': Date.now(),
                'lastSaveTime': Date.now(),
                'about': docs.about,
                'mainCode': docs.mainCode,
                'setConfig': docs.setConfig,
                'saveRecord': {},
                'status': 0
            };
            Work.create(docs, function(err, doc) {
                if (err) {
                    console.log('[api.copy] '+err);
                    res.send(err);
                } else {
                    var resData = {
                        iserro: 0,
                        msg: '复制成功！',
                        data: {
                            _id: doc._id
                        }
                    };
                    res.send(resData);
                }
            })
        })
    });
    // 前台页面
    Router.get('/h5/:id', function(req, res, next) {
        var id = req.params.id;
        var Work = global.dbHandel.getModel('work');
        Work.find({ '_id': id }).exec(function(err, docs) {

            generatorScript(docs[0]).then(function(){
                return res.render(__dirname + '/../../views/render.html');
            }).catch(function (e) {
                res.json(e);
            });
        })
    });
    return Router;
};