const express = require('express');

const User = require('../models/user.models');

const app = express();

app.use(express.json());

app.post("", async(req,res)=>{
  try {
      const user = await User.create(req.body);
      return res.status(201).send({user:user});
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
})

app.get("", async(req,res)=>{
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send({user: user});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
  
})

module.exports = app;