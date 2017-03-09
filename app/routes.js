//require express
var express = require('express');
var path = require('path');

var router = express.Router();

// export the router
module.exports = router;

// route the app for homepage
router.get('/', function (req, res) {
    // res.send('Hello World !!!')
     res.sendFile(path.join(__dirname, '../index.html'));
});

// route for about page
router.get('/about', function (req, res) {
    // res.send('about page ..:)');
    res.sendFile(path.join(__dirname, '../about.html'));
});

router.get('/contact');
router.post('/contact');