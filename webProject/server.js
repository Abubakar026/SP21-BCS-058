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


app.listen(port,()=>{
    console.log("server is connected sucessfully")
})

mongoose.connect("mongodb://127.0.0.1:27017/traveldatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to database")
}).catch((error)=>{
    console.log("error connecting to database")
    console.log(error)
})




app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/sign",(req,res)=>{
    res.render("sign")
})


app.get("/home",(req,res)=>{
    res.render("home")
})


app.get("/book",(req,res)=>{
    res.render("book")
})


app.get("/packages",(req,res)=>{
    res.render("packages")
})

app.get("/services",(req,res)=>{
    res.render("services")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

const createNewUser = require("./models/signupOperation");

//app.post("/sign",async (req,res)=>{
//    console.log("connected");
//    await createNewUser(req, res, req.body.firstName,req.body.lastname, req.body.email, req.body.password);

//})

app.post("/sign", async (req, res) => {
    
    const { username, email, password } = req.body;
    
      try {
        console.log("connect");
        await createNewUser(req, res, req.body.firstName,req.body.lastname, req.body.email, req.body.password);
        return;
      } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
      }
    })