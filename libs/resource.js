/**
 * Created by byte2 on 2016-08-30.
 */
var Q = require('q');
var fs = require('fs');
module.exports.create = function (obj) {
    var defer = Q.defer();
    var Audio = global.dbHandel.getModel(obj.type?'uploadMusic':'uploadImg');
    Audio.create(obj,function (err,result) {
        if(err)return defer.reject(err);
        defer.resolve(result);
    });
    return defer.promise;
};
/**
 * create new file
 * @param obj
 * @returns {promise.promise|jQuery.promise|*|h.promise|d.promise|promise}
 */
module.exports.creatNewFile = function (obj) {
    var defer = Q.defer();
    try{
        var readFrom = fs.createReadStream(obj.source);
        var saveTo = fs.createWriteStream(obj.dest);
        readFrom.pipe(saveTo);
        saveTo.on('finish', function() {
            defer.resolve('success')
        });
    }catch (e){
        defer.reject(e);
    }

    return defer.promise;
};

