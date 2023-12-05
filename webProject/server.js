const express = require("express")
const mongoose = require("mongoose")
const app = express()
const expressLayout = require("express-ejs-layouts")
app.set("layout","./layouts/mainLayout")
const port = 3000
const bodyParser = require("body-parser")
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(expressLayout)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to database")
}).catch((error)=>{
    console.log("error connectging to database")
    console.log(error)
})


app.get("/landing",(req,res)=>{
    res.render("landing")
})

app.get("/login",(req,res)=>{
    res.render("loginPage")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.listen(port,()=>{
    console.log("server is connected sucessfully")
})