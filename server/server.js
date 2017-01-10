var mongodb = require('mongodb')
var express = require('express')
var app = express();
var port = process.env.PORT || 8000
app.use('/', express.static('../client'))

app.listen(port, () => {
    console.log(port)
})


var router = express.Router()
router.get('/animal/:id', (req, res) =>{
    req.params.id
})

router.get('/user/:id', (req, res) =>{
    req.params.id
})

app.use('/api', router)
