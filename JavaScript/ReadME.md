Reaquirements:
        1    $npm init ==>           package.json
        2    $npm install express    web framework
        3    $npm install mongodb    database
        4    $npm install mongoose   
        5    $npm install nodemon




GET: `http://localhost:9000/aliens`
GET: `http://localhost:9000/aliens/<id>`
POST:`http://localhost:9000/aliens`
POST:`http://localhost:9000/aliens/<id>`

Create app.js
        app.js

        `
            const express = require('express');
            const mongoose = require('mongoose');
            const url = 'mongodb://localhost/AlienDBex'
            const app = express();

            mongoose.connect(url,{useNewUrlParser:true});
            const con = mongoose.connection
            
            con.on('opne',function(){
                console.log("connection. . . .");
            })

            const alienRouter = require('../routers/aliens')
            app.listen(9000,function{
                console.log('Server started');
            })

        `


