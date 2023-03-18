let express = require('express')
let ejs = require('ejs')
let mongoose = require('mongoose')
let body_parser = require('body-parser')
let app = express()

app.use(express.urlencoded({ extended: true }))
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

app.set('view engine', 'ejs')
app.set('views', 'views')

let port = 2345;
let apiroute = require('./route/apiroute')
app.use(apiroute)

let dbCon = "mongodb+srv://Arka:rkAozOH726ywp06F@cluster0.zjvh01u.mongodb.net/aggregate"
mongoose.connect(dbCon, ({ useNewUrlParser: true, useUnifiedTopology: true })).then(result => {
    app.listen(port, () => {
        console.log('server connected');
    })
}).catch(err => {
    console.log(err);
})

