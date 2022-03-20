const express = require("express");

const Student = require("../models/student.models");
const app = express();
app.use(express.json());


app.post("", async(req,res)=>{
    try {
        const user = await Student.create(req.body);
        return res.status(201).send({user:user});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

app.get("", async(req,res)=>{
    try {
      const user = await Student.find().lean().exec();
      return res.status(200).send({user:user});   
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})


module.exports = app;