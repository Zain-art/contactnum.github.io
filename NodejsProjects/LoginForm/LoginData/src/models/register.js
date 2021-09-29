const mongoose=require('mongoose');

const registeruser=new mongoose.Schema({
    
    Firstname:{
        type:String,require:true
    },
    
    Lastname:{
        type:String,require:true
    },

    Email:{
        type:String,require:true
    },
    Password:{
        type:String,require:true
    },
    Address:{
        type:String,require:true
    },

});

const registersh=new mongoose.model("RegisterStudent",registeruser);
module.exports=registersh;