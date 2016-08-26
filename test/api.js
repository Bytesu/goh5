
/**
 * Created by byte2 on 2016-08-19.
 */
/**
 * Created by byte2 on 2016-07-31.
 */
var request = require('superagent');
var domain = 'http://localhost:3030';
var id_ = '57be8b626e1e4a60124eff6a';
describe('User', function() {
    describe('#login()', function() {
        it('should login  without error', function(done) {
            request.get(domain+'/api/user/login')
                .send({username:'test',password:'test',time:Date.now()})
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
describe('Work', function() {
    describe('#create()', function() {
        it('should create  without error', function(done) {
            request.get(domain+'/api/work/create?title=test&status=1')
                .send({username:'test',password:'test',time:Date.now()})
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
describe('Show', function() {
    describe('#zip()', function() {
        it('should download zip without error', function(done) {
            request.get(domain+'/api/zip/'+id_)
                .end(function(err, res){
                    if(err){
                        done(err);
                    }else{
                        done();
                    }
                });
        });
        it('should render without error', function(done) {

            request.get(domain+'/api/h5/'+id_)
                .end(function(err, res){
                    if(err){
                        done(err);
                    }else{
                        done();
                    }
                });
        });
        it('should copy without error', function(done) {
            request.get(domain+'/api/copy/'+id_)
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

