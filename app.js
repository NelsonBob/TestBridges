const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const RouteBankins = require('./src/router/router')

const cors = require('cors');
const { Router } = require('express');
const app = express();

let corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions))

app.use(express.json());

mongoose.connect('mongodb+srv://winnie:nodejs123@cluster0.zxq1bgc.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log('Connection success');
    }).catch((error) => {
        console.log(error);
        process.exit()
    });

// app.use(bodyParser.json());

app.use('/api/', RouteBankins)



module.exports = app;