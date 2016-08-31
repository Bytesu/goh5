/**
 * Created by byte2 on 2016-08-30.
 */
var config ={
    port:3000,
    session:{
        secret: "i_,H5aUhFmi,$o*D?tItCx|!Js/)vcX0-U;`8NQ{'Exr'bM6Sq2G>t_AWH`H",
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
        saveUninitialized: true,
        resave: true
    },
    isDebug:true,
    mongodb:'mongodb://localhost:27017/goh5'
};


if(process.env.os !="Windows_NT"){ //production
    config.isDebug = false;
}
module.exports = config;