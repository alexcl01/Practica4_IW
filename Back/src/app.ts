
import express from "express";
import config from "./config";

import { Db , ObjectId } from "mongodb";
import { connectDB } from "./mongo";



 const run = async () => {  

  const app = express();
  const cors = require('cors');
  const corsOptions ={
      origin:'http://localhost:3000', 
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200
  }
  app.use(cors(corsOptions));
  app.set('port', config.PORT);
    const db: Db = await connectDB();
    app.set("db", db);
  

    const bodyParser = require('body-parser');
    
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(async (req, res, next) => {

      next();
  });
  
   app.get("/list", async (req, res) => {
    try {
      const db: Db = await req.app.get("db");
      const uss= await db.collection("User").find().toArray() ;
      if (uss) return res.json(uss);
      else return res.json("Empty")
    } catch (error) {
      res.status(204);
    }
  })

  app.delete("/:userId", async (req, res) => {
    try {
      const db: Db = await req.app.get("db");
      const uss= await db.collection("User").findOne({_id: new ObjectId(req.params.userId)}) ;
      if (uss){ 
        await db.collection("User").deleteOne({_id: new ObjectId(req.params.userId)})
        res.status(200).send(`Deleted`);
        
     }
    } catch (error) {
      res.status(204);
    }
  })
  app.put("/:userId", async (req, res) => {
    try {
      const db: Db = await req.app.get("db");
      const uss= await db.collection("User").findOne({_id: new ObjectId(req.params.userId)}) ;
      if (uss){ 
        console.log(req.params.userId)
        await db.collection("User").updateOne({_id: new ObjectId(req.params.userId)} ,{ $set:{ name: req.body?.name,  surnames: req.body?.surnames, email: req.body?.email}})
        res.status(200).send(`Edited`);
        
     }
    } catch (error) {
      res.status(204);
    }
  })
    
    app.post("/create-user",async (req, res) => {
      try {
        const db: Db = await req.app.get("db");
        const list= await  db.collection("User");
        if (await list.findOne({ email: req.body.email })) {
          return res.status(301).json({ message: 'The email already exist' });
        } else {
          
          const newUser = {
            name: req.body.name,
            surnames: req.body.surnames,
            email: req.body.email
          };
          await list.insertOne(newUser);
        }
      } catch (error) {
        res.json(error);
      }
    })

  

    await app.listen(config.PORT,() =>{
      console.log(`Server start at http://localhost:${config.PORT}`);
    });
  };
  
  try {
    run();
  } catch (e) {
    console.error(e);
  }