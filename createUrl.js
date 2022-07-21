import express from 'express'
const app = express()

app.get('',(req,res)=>{
    res.send('Welcome to my Page')
})

app.get('/about',(req,res)=>{
    res.send("welcome to about page")
})

app.listen(4000);