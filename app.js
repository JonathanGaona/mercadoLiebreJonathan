const express = require('express');
const app= express();
const path=require('path')

const publicPath = path.resolve(__dirname,'./public');
app.use (express.static(publicPath));

app.listen(process.env.PORT || 3000,function(){
    console.log('Servidor funcionando en el puerto 3000')})


app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})
