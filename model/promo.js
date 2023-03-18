let mongoose=require('mongoose')
let schema=mongoose.Schema

let promoMode= new schema({
    id:{
        type:String,
        required:true
    },
   
   name:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true
    },
    daily_sales:[
        {
            type:String,
        required:true
        }
    ]
        
})

let promoModel=mongoose.model('promo',promoMode)
module.exports=promoModel;