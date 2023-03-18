let inventory = require('../model/inventory')
let employee = require('../model/employee')
let payments = require('../model/payments')
let promo = require('../model/promo')

let addinvent = async (req, res) => {
    try {
        let data2 = await new inventory({
            id: req.body.id,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            category: req.body.category
        })
        let add = await data2.save();
        res.status(200).json({ success: true, msg: "data saved", datas: add })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not saved" })
    }

}
// Opertaors=>
let getinvent = async (req, res) => {
    try {
        // let getdata=await inventory.find({"quantity":{$gte:23}})
        // let getdata=await inventory.find({"quantity":{$eq:3}})
        // let getdata=await inventory.find({"quantity":{$lte:3}})
        // let getdata=await inventory.find({"quantity":{$lt:7}})
        let getdata = await inventory.find({ "quantity": { $ne: 3 } })
        // let getdata=await inventory.find({"price":{$in:[390,550]}})
        // let getdata=await inventory.find({"price":{$nin:[390,550]}})
        res.status(201).json({ success: true, msg: "data found", data: getdata })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not found" })
    }
}
let addemployee = async (req, res) => {
    try {
        let data = await new employee({
            id: req.body.id,
            emp_name: req.body.emp_name,
            emp_age: req.body.emp_age,
            salary: req.body.salary,
            job: req.body.job

        })
        let add = await data.save();
        res.status(200).json({ success: true, msg: "data saved", datas: add })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not saved" })
    }
}
// logical operators=>
let getemployee = async (req, res) => {
    try {
        // let getdata=await employee.find({$and:[{"job":"Accountant"},{"salary":{$gte:20000,$lt:26000}}]})
        // let getdata=await employee.find({$and:[{"emp_age":{$gte:20,$lt:45}},{"salary":{$gte:20000,$lt:35000}}]})
        // let getdata=await employee.find({$or:[{"job":"tcs"},{"job":"Accountant"}]})
        // let getdata=await employee.find({$nor:[{"job":"tcs"},{"job":"Accountant"}]})
        // let getdata=await employee.find({"salary":{$not:{$gte:20000}}})
        // let getdata=await employee.find({"emp_age":{$mod:[2,1]}})
        let getdata = await employee.find({ "emp_name": { $regex: "Pradip" } })
        res.status(201).json({ success: true, msg: "data found", data: getdata })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not found" })
    }
}
let addpayments = async (req, res) => {
    try {
        let data2 = await new payments({
            id: req.body.id,
            gross_amounts: req.body.gross_amounts,
            discounts: req.body.discounts,
            net_amount: req.body.net_amount

        })
        let add = await data2.save();
        res.status(200).json({ success: true, msg: "data saved", datas: add })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not saved" })
    }

}
let getpayments = async (req, res) => {
    try {
        let getdata = await payments.find()
        res.status(201).json({ success: true, msg: "data found", data: getdata })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not found" })
    }
}
let addpromo = async (req, res) => {
    try {
        let data2 = await new promo({
            id: req.body.id,
            name: req.body.name,
            period: req.body.period,
            daily_sales: req.body.daily_sales

        })
        let add = await data2.save();
        res.status(200).json({ success: true, msg: "data saved", datas: add })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not saved" })
    }

}
let getpromo = async (req, res) => {
    try {
        let getdata = await promo.find()
        res.status(201).json({ success: true, msg: "data found", data: getdata })
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "data not found" })
    }
}

module.exports = { addinvent, addemployee, getinvent, getemployee, addpayments, getpayments, addpromo, getpromo }