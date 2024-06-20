const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./route/api');
port = 5000;

connectDb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://shriyasorte:dYluM2fCaCHGXRmM@cluster0.x0ux0tf.mongodb.net/ticket_management');
        console.log('connected to database');
    }catch(err){
        console.log(err);
    }
}
connectDb();
app.use(express.json());
app.use('/api',api);

app.listen(port , () =>{
    console.log(`server is running on port ${port}`);
});