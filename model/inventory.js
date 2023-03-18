let mongoose=require('mongoose')
let schema=mongoose.Schema

let inventMode= new schema({
    id:{
        type:Number,
        required:true
    },
   
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:[{
        type:String,
        required:true
    }]
        
})

let invModel=mongoose.model('inventory',inventMode)
module.exports=invModel;