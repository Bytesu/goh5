/**
 * Created by byte2 on 2016-08-26.
 */
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        {
            type: 'dateFile',
            filename: 'logs/Error',
            pattern:"-yyyy-MM-dd.log",
            alwaysIncludePattern:true,
            category: 'log4jslog'
        }
    ]
});
var logger = log4js.getLogger('log4jslog');



module.exports = {
    logger:logger,
    log:log4js.connectLogger(logger,{level:'auto'})
};