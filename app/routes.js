//require express
var express = require('express');
var router = express.Router();

// export the router
module.exports = router;

// route the app for homepage
router.get('/',function(req,res){
    res.send('Hello World')
});

// route for about page
router.get('/about',function(req,res){
    res.send('about page ..:)');
});

router.get('/contact');
router.post('/contact');