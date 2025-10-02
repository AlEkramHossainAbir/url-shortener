const express = require('express')

const router = express.Router();

router.post("/",(req,res)=>{
    const body = req.body;
    if(!body.url){
        return res.status(400).json({msg: "URL is required"})
    }
    
    res.send("Hello World")
})