const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    name:{
        type:String,
    },
    role:{
      type:String,
    },
    classes:{
      type:Array,
      items:{
        type:Number,
      },
    },
    subjects:{
      type:Array,
      items:{
        type:String
      },
    }


})
module.exports=mongoose.model('users',userschema)
