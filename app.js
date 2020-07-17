// Setup
var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const cors = require('cors');
//var db = 'mongodb://localhost:27017/db';

//const apiRouter = require('./routes/api.js');
const User = require('./models/user');

var app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// Database
//mongoose.connect("mongodb://localhost:27017/db")
// mongoose.connect(db, {useNewUrlParser: true}, (err) => {
//     if (err)
//         console.error(err);
//     else
//         console.log("Connected to the mongodb"); 
// });

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.use('/web', apiRouter);


app.post('/addPost', (req, res, next) => {
    var postData = req.body;

    
    console.log(postData);
    User.create(postData).then(data => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});

app.get("/", (req, res) => {
    User.findAll({}).then(users => {
           res.render('index', { posts: users});        
    }).catch(err => {
        res.send('Error :' + err);
    });   
 });

// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})


