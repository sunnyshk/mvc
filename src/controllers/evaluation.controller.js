const express = require("express");

const app = express();

const Evaluation = require("../models/evaluation.models");

app.get("", async (req, res) => {
  try {
    const evaluation = await Evaluation.find().lean().exec();
    return res.status(200).send({evaluation:evaluation});
  } catch (error) {
    return res.status(500).send({messsage:error.messsage});
  }
});

app.post("", async(req,res)=>{
    try {
        const evaluation = await Evaluation.create(req.body)
        return res.status(201).send({evaluation:evaluation});
    } catch (error) {
        return res.status(500).send({messsage:error.messsage});
    }
})

module.exports = app;
