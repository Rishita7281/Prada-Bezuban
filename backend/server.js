const express=require("express")
const path=require("path")
const ejs=require("ejs")
const port=8000
const hostname='127.0.0.1'
require("./connection")

const app=express()
app.use(express.json())
app.use(express.static("../public"))

const templatepath=path.join(__dirname,'../public')
app.set("view engine","ejs")
app.set("views",templatepath)

app.get("/",async(req,res)=>{
    res.render("index")
})

app.listen(port,hostname,()=>{
    console.log("Server is Running..")
})
