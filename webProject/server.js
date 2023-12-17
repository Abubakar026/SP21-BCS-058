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
    res.render("login", {showHeader: false})
})

app.get("/sign",(req,res)=>{
    res.render("sign", {showHeader: false})
})


app.get("/home",(req,res)=>{
    res.render("home", {showHeader: true})
})


const {fetchBooking} = require("./models/fetchBookings");

app.get("/book", async(req,res)=>{
    try{
        
        let bookings = await fetchBooking();
        res.render("book", {showHeader: true, bookings: bookings});
    }catch(e){
        console.log(e);
    }
})

const { createNewBooking } = require("./models/bookingOperation");

app.post("/book", async (req, res) => {
    
    const {fromto,whereto, arrival, leaving } = req.body;
    
      try {
        console.log("connecting");
        const email = "ali@gmail.com";
        await createNewBooking(res, email, fromto, whereto, arrival, leaving);
        return;
      } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
      }
    })

app.get("/packages",(req,res)=>{
    res.render("packages", {showHeader: true})
})

app.get("/services",(req,res)=>{
    res.render("services", {showHeader: true})
})

const {fetchfeedback} = require("./models/fetchFeedbacks");

app.get("/contact", async(req,res)=>{
    try{
        
        let feedbacks = await fetchfeedback();
        res.render("feed", {showHeader: true, feedbacks: feedbacks});
    }catch(e){
        console.log(e);
    }
})

const { createNewFeedback } = require("./models/feedbackOperation");

app.post("/contact", async (req, res) => {
    
    const {name,phone, message} = req.body;
    
      try {
        console.log("connecting");
        await createNewFeedback(res, name,phone, message);
        return;
      } catch (error) {
        console.error("Error giving feedback:", error);
        res.status(500).send("Internal Server Error");
      }
    })

const { createNewUser } = require("./models/signupOperation");


app.post("/sign", async (req, res) => {
    
    const { firstname, lastname, email, password } = req.body;
    
      try {
        console.log("connect");
        await createNewUser(req, res, firstname, lastname, email, password);
        return;
      } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
      }
    })


    const { findUserByEmailAndPassword } = require("./functions/loginUserFunction");
    app.post("/login", async (req, res) => {
        const { email, password } = req.body;
        console.log("Email: "+email+"Password: "+password);
          try {
            const isUser = await findUserByEmailAndPassword(email, password);
            if(isUser){
             // req.session.isAuthenticated = true;
              console.log("Logged in Succesfully.");
           //   req.session.user = isUser;
           //   req.session.userEmail = email;
            //  req.session.flash = { type: "success", message: "Logged in Successfully" };
              res.redirect("/home");
              return;
            }else{
              console.log("User not found");
          //    req.session.flash = { type: "fail", message: "User not found, Not have account? Please Sign Up." };
              res.redirect("/login");
            }
          } catch (error) {
            console.error("Error registering user:", error);
          }
        })