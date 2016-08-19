/**
 * Created by byte2 on 2016-08-19.
 */
var express = require('express');
var router = express.Router();

var _ = require('underscore');
var fs = require('fs');

router.get('/zip/:id', function(req, res, next) {
    var id = req.params.id;
    var Work = global.dbHandel.getModel('work');
    Work.find({ '_id': id }).exec(function(err, docs) {
        console.log(id);
        fs.writeFile(__dirname+'/message.txt', 'Hello Node.js', (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
            res.render(pwd + '/Front_Stage/index.html', {
                workData: docs[0]
            });
        });
    })
});

module.exports = router;