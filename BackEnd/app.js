const express= require('express');
const bodyParser = require('body-parser');

const app =  express();

const port = process.env.port || 3000 //this is used for server port
const authRoute = require('./routes/auth-route');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_28:user_28@cluster1.cdowv7k.mongodb.net/?retryWrites=true&w=majority', (err)=>{
    if(err){
        console.log("Database is not connected")
    }else{
        console.log("Database is connected");
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use('/auth', authRoute);
app.get('/', (req, res) =>{
    res.send("Welcome to server")
})

app.listen(port, ()=>{
    console.log("Connected to server:", port)
})
