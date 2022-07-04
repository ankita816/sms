const mongoose=require('mongoose')
const studentschema=new mongoose.Schema({
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
    class:{
        type:Number,
    },
    section:{
        type:String,
    },
    rollnum:{
        type:Number,
    },
    admission_year:{
        type:Number,
    },
    subjects:{
      sub1:{
        type:Number,
        default:0

      },
      sub2:{
        type:Number,
        default:0

      },
      sub3:{
        type:Number,
        default:0

      }
    },
    total_marks:{
      type:Number,
      default:0

    }


})
module.exports=mongoose.model('students',studentschema)