import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://varshithtangudu:Varshit123@varshit23.a3gqxkz.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("crudapp");
    cb();
}

export {db,connectToDB};