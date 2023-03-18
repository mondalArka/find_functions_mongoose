let mongoose=require('mongoose')
let schema=mongoose.Schema

let payMode= new schema({
    id:{
        type:Number,
        required:true
    },
   
    gross_amounts:{
        type:Number,
        required:true
    },
    discounts:{
        type:Number,
        required:true
    },
    net_amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

let payModel=mongoose.model('payments',payMode)
module.exports=payModel