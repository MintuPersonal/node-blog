const express = require('express');
const { Sequelize, Op, JSON } = require('sequelize');
const moment = require('moment')
// const fileUpload = require('express-fileupload');
// const fs = require('fs');
 const User = require('../models/user');
// const Category = require('../models/Category');
// const Doctor = require('../models/Doctor');
// const DoctorSchedule = require('../models/DoctorSchedule.js');
// const Order = require('../models/Order.js');
// const OrderDetails = require('../models/OrderDetails.js');
// const { Setting } = require('../models/Setting.js');
//const ActiveUser = require('../models/Patient.js');

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

//  app.post('/addpost', (req, res) => {
//      var postData = new Post(req.body);
//      postData.save().then( result => {
//          res.redirect('/');
//      }).catch(err => {
//          res.status(400).send("Unable to save data");
//      });
//  });


//  router.get('/getpatient', (req, res, next) => {
//     var mobile = req.query.pmobile.trim();
//     console.log(mobile);
//     var pid = parseInt(mobile);
//     var toNumber = '+880';
//     Patient.findAll({ where: { MobileNo: mobile }, limit: 1, timestamps: false }).then(patient => {
//         if (patient.length == 0) {
//             patientobj = { PID: pid, TONumber: toNumber, MobileNo: mobile, CreateDate: new Date(), Delete: 0, Active: 1 }
//             Patient.create(patientobj).then(data => {
//                 res.json({
//                     status: true,
//                     msg: 'User create successfully',
//                     patient: [{ PID: cid, TONumber: toNumber, MobileNo: mobile, CreateDate: new Date(), Delete: 0, Active: 1 }]
//                 });
//             }).catch(err => {
//                 console.log('Error :' + err);
//             });
//         } else {
//             res.json({
//                 status: true,
//                 msg: 'User find successfully',
//                 patient: patient
//             });
//         }
//     }).catch(err => {
//         console.log('Error ' + err);
//     });
// });

// router.get('/getpatientinfo', (req, res, next) => {
//     var mobile = req.query.pmobile;
//     console.log(mobile);
//     Patient.findAll({ where: { MobileNo: mobile }, limit: 1 }).then(patient => {
//         console.log('total patient : ' + patient[0]);
//         if (patient) {
//             res.json({
//                 status: true,
//                 msg: 'User find successfully',
//                 patient: patient
//             });
//         } else {
//             res.json({
//                 status: false,
//                 msg: 'User not found',
//                 patient: []
//             });
//         }
//     }).catch(err => {
//         console.log('Error ' + err);
//     });
// });

module.exports = router;