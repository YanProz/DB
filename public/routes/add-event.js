const express = require('express');
var router = express.Router();
var sessions= require('client-sessions');
var bodyParser = require('body-parser');
var urlencodedParser = module.exports = bodyParser.urlencoded({ extended: false });

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

router.get('/', requireLogin, function(req, res){
   res.sendfile('public/views/add-event.html');
});

router.post('/', urlencodedParser,  function(req, res){
    var event = new Event(req.body);
    event.save();
    console.log(req.body);
    res.redirect('/add-event');
});

module.exports = router;