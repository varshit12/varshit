import express from 'express';
import cors from 'cors';

import {db,connectToDB} from "./db.js";

const app = express()

app.use(express.json())

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server  is running!");
})
app.get('/insert',(req,res)=>{
    const details=db.collection('userdata').insertOne({name:"sanju"});
    res.json(details);
})

app.post("/input:name",async(req,res)=>{
 const details = await db.collection("userdata").insertOne({Name:req.params.name});
 res.json(details);
 
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})
