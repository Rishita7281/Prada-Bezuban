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

app.get("/about",async(req,res)=>{
    res.render("about")
})

app.get("/blog",async(req,res)=>{
    res.render("blog")
})

app.get("/contact",async(req,res)=>{
    res.render("contact")
})

app.get("/detail",async(req,res)=>{
    res.render("detail")
})

app.get("/price",async(req,res)=>{
    res.render("price")
})

app.get("/product",async(req,res)=>{
    res.render("product")
})

app.get("/service",async(req,res)=>{
    res.render("service")
})

app.get("/team",async(req,res)=>{
    res.render("team")
})

app.get("/testimonial",async(req,res)=>{
    res.render("testimonial")
})

app.listen(port,hostname,()=>{
    console.log("Server is Running..")
})
