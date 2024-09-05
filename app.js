const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.status(200).json({Message:"Hello World"});    
})
app.get('/getData',(req,res)=>{
    res.status(200).json(
		{
			Message:"Hello World",
			Data: "This is a Dummy data"
		}
	);    
})
app.listen(5000,()=>console.log("App is up and running"));