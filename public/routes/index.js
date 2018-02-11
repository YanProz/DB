
const express = require('express');
const router = express.Router();
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

//API index
router.get('/', function(req, res){
    res.sendfile('public/views/index.html');
})

router.post('/', urlencodedParser, function(req, res){
    Admin.findOne({login: req.body.login}, function(err, admin){
        if(!admin){
            (res.redirect('/'), {error:'Invalid email or password.'});
        }
        else{
            if(req.body.password == admin.password){
                req.session.user = admin;
                res.redirect('/cabinet');
            }
            else{
                (res.redirect('/'), {error:'Invalid email or password.'});
            }
        }
    })
})

//API cabinet
/* router.get('/cabinet', requireLogin, function(req, res){
   res.sendfile('public/views/cabinet.html');
})
*/
/*//API add-item
router.get('/add-item', requireLogin, function(req, res){
   res.sendfile('public/views/add-item.html');
})

router.post('/add-item', urlencodedParser,  function(req, res){
    var pupil = new Pupil(req.body);
    pupil.save();
    console.log(req.body);
    res.redirect('/add-item');
});

/* API add-event
router.get('/add-event', requireLogin, function(req, res){
   res.sendfile('public/views/add-event.html');
})

router.post('/add-event', urlencodedParser,  function(req, res){
    var event = new Event(req.body);
    event.save();
    console.log(req.body);
    res.redirect('/add-event');
});
*/
router.get('/logout', function(req, res){
    req.session.reset();
    res.redirect('/');
}
)

module.exports = router;

