const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.status(200).json({Message:"Hello World"});    
})
app.listen(5000,()=>console.log("App is up and running"));