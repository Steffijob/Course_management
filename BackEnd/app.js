const express= require('express');
const app =  express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.port || 3000 //this is used for server port

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//For test purpose
app.get('/', (req, res) => {
    res.send({
      status: 'online'
    })
});

const loginRoutes =require("./src/Routes/login");

//DB Connection
mongoose.connect('mongodb+srv://user_28:user_28@cluster1.cdowv7k.mongodb.net/?retryWrites=true&w=majority', (err)=>{
    if (!err){
        console.log("connected to DB");
    }
    else {
        console.log("Error in connection to DB:" + JSON.stringify(err, undefined, 2));
    }
});


app.use("/login", loginRoutes);


app.listen(port, ()=>{
    console.log("Connected to server:", port)
})
