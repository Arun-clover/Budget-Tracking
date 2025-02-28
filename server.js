const express = require('express');
const app = express();
const port = 3000;  
const path = require('path');

app.use(express.static('./public'));

app.get('^/$|page1(.html)?',(req,res)=>{
   res.sendFile(path.join(__dirname,'public','html','page1.html'));
})

app.get('/page2(.htm)?',(req,res)=>{
   res.sendFile(path.join(__dirname,'public','html','page2.html'));
})

app.get('/page3(.html)?',(req,res)=>{
   res.sendFile(path.join(__dirname,'public','html','page3.html'));
})

app.get('/page4(.html)?',(req,res)=>{
   res.sendFile(path.join(__dirname,'public','html','page4.html'));
})

 app.get('/page5(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','html','page5.html'));
 })

 app.get('/*',(req,res)=>{
   res.status(404).sendFile(path.join(__dirname,'public','html','404.html'));
 })

 app.listen(port,()=>{
     console.log(`Server is running on port http://localhost:${port}`);

 });