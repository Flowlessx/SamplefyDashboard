// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var path = require('path');

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
    res.send('this is a sample!');
});



// START THE SERVER
// ==============================================
app.listen(port,"0.0.0.0");
console.log('Magic happens on port ' + port);

// set these folders to public
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/examples', express.static(path.join(__dirname, 'examples')))
app.use('/git_mod', express.static(path.join(__dirname, 'git_mod')))
// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
router.get('/user', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/home.html'));
});

router.get('/user/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/home.html'));
});
router.get('/user/live_feed', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/dashboard.html'));
});
// about page route (http://localhost:8080/about)
router.get('/user/trending', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/icons.html'));
});
// about page route (http://localhost:8080/about)
router.get('/user/notifations', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/map.html'));
});
// about page route (http://localhost:8080/about)
router.get('/user/user_profile', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/user.html'));
});
// about page route (http://localhost:8080/about)
router.get('/user/royaltys', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/dashboard.html'));
});
// about page route (http://localhost:8080/about)
router.get('/user/cu_support', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/cu_support.html'));
});

router.get('/sound_visual', function(req, res) {
    res.sendFile(path.join(__dirname + '/git_mod/index.html'));
});
// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.name + '!');
});
app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

// apply the routes to our application
app.use('/', router);
