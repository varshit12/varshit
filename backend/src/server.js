import express from 'express'

import {db,connectToDB} from "./db.js";

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server running!");
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})
