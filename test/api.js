
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
        it('should save without error', function(done) {
            request.get(domain+'/zip/57b672e8f07878ac2bd11b2d')
            // request.get('http://www.baidu.com')
            //     .send(JSON.stringify({username:'15029351330',password:'211064'}))
                .end(function(err, res){
                    // console.log('---------')
                    if(err){
                        return console.log(err);
                    }
                    console.log(res+'---------')

                });
        });
    });
});
