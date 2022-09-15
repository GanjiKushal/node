const express=require("express")
const app=express()
const port=3000
app.listen(port,(req,res)=>{
    console.log(`App is running at ${port}`)
})
app.get('/',(req,res)=>{
    res.send("Welcome to the App")
})
app.get("/home", (req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.post("/home",(req,res)=>{
    console.log("We are in POST API")
    res.send("<h1>Welcome to Post request</h1>")
})