let mongoose=require('mongoose')
let schema=mongoose.Schema

let empMode= new schema({
    id:{
        type:Number,
        required:true
    },
   
    emp_name:{
        type:String,
        required:true
    },
    emp_age:{
        type:Number,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

let empModel=mongoose.model('employee2',empMode)
module.exports=empModel