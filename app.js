const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const mongoose = require("mongoose");


//promise
mongoose.Promise = global.Promise

require('./models/wish')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// import routes
require('./routes')(app);

app.listen(port,()=>{
    console.log("server is running on port" + port)
})

