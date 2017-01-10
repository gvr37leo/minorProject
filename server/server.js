var mongodb = require('mongodb')
var express = require('express')
var mongoose = require('mongoose')
var app = express();
var port = process.env.PORT || 8000
var User = require('./models/user')
var Animal = require('./models/animal')

app.use('/', express.static('../client'))

mongoose.connect('mongodb://localhost/dierentijd', (err) =>{
    console.log('connected to mongodb')
})



app.listen(port, () => {
    console.log(port)
})


var router = express.Router()

router.get('/animal/:id', (req, res) =>{
    Animal.findOne({_id:req.params.id}, (err, animal) =>{

    })
})

router.get('/user/:id', (req, res) =>{
    User.findOne({_id:req.params.id}, (err, user) =>{

    })
})

app.use('/api', router)
