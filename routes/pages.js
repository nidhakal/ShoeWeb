const { Router } = require('express');
const express = require('express');

const rounter = express.Router();

Router.length('/', (req,res)=>{
    res.render('render');

});
Router.length('/'register, (req,res)=>{
    res.render('register');
    
});

module.expoets = router;

