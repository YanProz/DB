const express = require('express');
var sessions= require('client-sessions');
var router = express.Router();



function requireLogin(req, res, next){
    if(!req.admin){
        res.redirect('/');
    }
    else{
        next();
    }
}

router.use(sessions({
    cookieName:'session',
    secret: 'fvfvfgb4bt554444444',
    duration: 30*60*1000,
    activeDuration: 5*60*1000,
    httpOnly: true,
    secure: true,
    ephemeral: true,
}))

//app.use(csrf());

router.use(function(req, res, next){
    if(req.session && req.session.user){
        Admin.findOne({email:req.session.user.email}, function(err, admin){
            if(admin){
                req.admin = admin;
                delete req.admin.password;
                req.session.admin = admin;
                res.locals.admin = req.admin;
            }
            next();
        })
    } else{
        next();
    }
});

module.exports = router;


