import express from 'express';
import cors from 'cors';

import {db,connectToDB} from "./db.js";

const app = express()

app.use(express.json())

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server  is running!");
})

app.post('/password/:email/:newpassword',async (req,res)=>{
  
    const details = await db.collection('userdatav').findOneAndUpdate({Email:req.params.email},{$set:{Password:req.params.newpassword}})
    res.json(details);
})

app.get('/insert',(req,res)=>{
    const details=db.collection('userdata').insertOne({name:"sanju"});
    res.json(details);
})

app.post("/input:name",async(req,res)=>{
 const details = await db.collection("userdata").insertOne({Name:req.params.name});
 res.json(details);
 
})
app.post("/signup/:firstname/:lastname/:dob/:email/:password/:mobileNumber",async(req,res)=>{
    const details = await db.collection("userdatav").insertOne({Firstname:req.params.firstname,Lastname:req.params.lastname,Dob:req.params.dob,Email:req.params.email,Password:req.params.password,Mobilenumber:req.params.mobileNumber});
    res.json(details);
    
   })

app.post("/Adminlogin/:email/:password",async(req,res)=>{ 
    const details = await db.collection("userdata-g").findOne({Email:req.params.email,Password:req.params.password});
    res.json(details);
   })



app.post("/login/:email/:password",async(req,res)=>{ 
    const details = await db.collection("userdatav").findOne({Email:req.params.email,Password:req.params.password});
    res.json(details);
   })

app.post("/createpost/:title/:post",async(req,res)=>{ 
    const details = await db.collection("userdata-v").insertOne({Title:req.params.title,Post:req.params.post});
    res.json(details);
   })

app.get('/pso/',async(req,res)=>
{
    const details=await db.collection("userdata-v").find().toArray();
    res.json(details);
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})
