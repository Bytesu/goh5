/**
 * Created by byte2 on 2016-09-18.
 */
var request = require('request');
var fs = require('fs');
var Q = require('q');

/***
 * opt {url:'',path:''}
 * @param opt
 * @constructor
 */
function Uploader(opt) {
    if(!opt.url || !opt.path) throw  new Error('invalid arguments !');
    this.opt = opt;
}
Uploader.prototype = {
    formData:function () {
        var self = this;
        var formData = {
            // Pass a simple key-value pair
            // my_field: 'my_value',
            // Pass data via Buffers
            // my_buffer: new Buffer([1, 2, 3]),
            // Pass data via Streams
            file: fs.createReadStream(self.opt.path),
            // Pass multiple values /w an Array
            // attachments: [
            //     fs.createReadStream(__dirname + '/attachment1.jpg'),
            //     fs.createReadStream(__dirname + '/attachment2.jpg')
            // ],
            // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
            // Use case: for some types of streams, you'll need to provide "file"-related information manually.
            // See the `form-data` README for more information about options: https://github.com/form-data/form-data
            // custom_file: {
            //     value:  fs.createReadStream('/dev/urandom'),
            //     options: {
            //         filename: 'topsecret.jpg',
            //         contentType: 'image/jpg'
            //     }
            // }
        };
        return formData;
    },
    upload:function () {
        var defer = Q.defer();
        var self = this;
        request.post({url:self.opt.url, formData: self.formData()}, function optionalCallback(err, httpResponse, body) {
            if (err) {
                console.error('upload failed:', err);
                return defer.reject(err);
            }
                console.log(JSON.stringify(httpResponse));
            console.log('Upload successful!  Server responded with:', body);
            return defer.resolve(body);
        });
        return defer.promise;
    }
};
module.exports = Uploader;
