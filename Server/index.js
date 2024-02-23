const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const User=require('./Modals/user.js');
const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://tanmay:azzKA5F0PM0S5rYv@cluster0.9ugir26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/Signup',async(req,res)=>{
    const {username,email,password} =req.body;
    const userDoc= await User.create({username,email,password});
    res.json(userDoc);
});
app.listen(4000);
