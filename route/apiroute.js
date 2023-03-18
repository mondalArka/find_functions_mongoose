let express=require('express')
let route=express.Router()
let controller=require('../controller/apicontroller')


route.post('/addinvent',controller.addinvent);
route.get('/getinvent',controller.getinvent);
route.post('/addemployee',controller.addemployee);
route.get('/getemployee',controller.getemployee);
route.post('/addpayments',controller.addpayments);
route.get('/getpayments',controller.getpayments);
route.post('/addpromo',controller.addpromo);
route.get('/getpromo',controller.getpromo);

module.exports=route;