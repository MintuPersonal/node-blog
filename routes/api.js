const express = require('express');
const { Sequelize, Op, JSON } = require('sequelize');
const moment = require('moment')
const User = require('../models/user');
const router = express.Router();

router.post('/addPost', (req, res, next) => {
    var postData = req.body;
    console.log(postData);
    User.create(postData).then(data => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});

router.get("/", (req, res) => {
    User.findAll({}).then(users => {
           res.render('index', { posts: users});        
    }).catch(err => {
        res.send('Error :' + err);
    });   
 });
module.exports = router;