const express = require('express');

const Batch = require('../models/batch.models');

const app = express();

app.use(express.json());

app.post("", async(req,res)=>{
    try {
        const batch = await Batch.create(req.body);
    return res.status(201).send({batch:batch});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

app.get("", async(req,res)=>{
    try {
        const batch = await Batch.find().lean().exec();
    return res.status(200).send({batch:batch});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})


module.exports = app;
