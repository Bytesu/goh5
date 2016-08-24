/**
 * Created by byte2 on 2016-08-23.
 */
'use strict';
var fs = require('fs');
var path = require('path');
function walk(path_){
    var find_file = [];
    try{
        var files = fs.readdirSync(path_);
        files.forEach((item) =>{
            var tmpPath = path.join(path_ , item);
            var stat = fs.statSync(tmpPath);
            if(stat.isDirectory()){
                find_file = find_file.concat(walk(tmpPath));
            }else if(stat.isFile()){
                find_file.push(tmpPath);
            }
        });
    }catch(e){
        console.log(e);
    }


    return find_file;

    // handleFile(path, floor);
    // floor++;
    return fs.readdir(path_, function(err, files) {
        if (err) {
            console.log('read dir error');
        } else {
            files.forEach(function(item) {
                var tmpPath = path.join(path_ , item);
                fs.stat(tmpPath, function(err1, stats) {
                    if (err1) {
                        console.log('stat error');
                    } else {
                        if (stats.isDirectory()) {
                            walk(tmpPath, floor, handleFile);
                        } else {
                            handleFile(tmpPath, floor);
                        }
                    }
                })
            });
        }
    });



   /* return new Promise((resolve,reject) => {
        fs.readdir(path_,(err,files) =>{
            let files_finded = [];
            try{
                files.forEach(function(item){
                    judgeFileType(path.join(path_,item)).then((result)=>{
                        if(result.dir){
                            readDir(path.join(_path,item)).then()
                        }else if(result.file){
                            result.push(path.join(path_,item))
                        }
                    }).catch((err)=>{
                        console.log(err);
                    })
                })
            }catch(e){
                reject(e);
            }


            console.log(files);
            resolve(files)

        });
    })*/

}
exports.readDir = walk;
module.exports.judgeFileType = function (path){
    return new Promise((resolve,reject) => {
        fs.stat(path,(err,stats)=>{
            if(err){
                reject(err)
            }else{
                resolve({
                    file:stats.isFile(),
                    dir:stats.isDirectory()
                })
            }
        })
    })
}


