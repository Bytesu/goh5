/**
 * Created by byte2 on 2016-08-26.
 */
var log4js = require('log4js');
var config = require('./config');
var configure = {
    appenders: [
        {
            type: 'dateFile',
            filename: 'logs/Error',
            pattern:"-yyyy-MM-dd.log",
            alwaysIncludePattern:true,
            category: 'log4jslog'
        }
    ]
};
var logger = log4js.getLogger('log4jslog');

if(config.isDebug){
    configure.appenders.push({ type: 'console' })
    logger.setLevel(log4js.ALL)
}
log4js.configure(configure);

module.exports = {
    logger:logger,
    log:log4js.connectLogger(logger,{level:'auto'})
};