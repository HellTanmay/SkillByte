const mongoose = require('mongoose');
const {Schema,model}=mongoose;

const UserSchema=new Schema({
    username:{type:String,required:true,unique:true},
    email: {unique:true,type:String,required:true,match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    password:{type:String,required:true},
});

const UserModel=model('User',UserSchema);

module.exports=UserModel;