
/**
 * Created by byte2 on 2016-08-19.
 */
/**
 * Created by byte2 on 2016-07-31.
 */
var request = require('superagent');
var domain = 'http://localhost:3030';
//show/57b672e8f07878ac2bd11b2d
describe('Show', function() {
    describe('#zip()', function() {
        it('should download without error', function(done) {
            request.get(domain+'/api/zip/57b672e8f07878ac2bd11b2d')
                .end(function(err, res){
                    if(err){
                        done(err);
                    }else{
                        done();
                    }
                });
        });
    });
});
