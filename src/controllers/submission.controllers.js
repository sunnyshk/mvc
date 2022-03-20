const express = require('express');

const router = express.Router();

const app = express();

const Submission = require('../models/submission.models');

app.use(express.json());


app.post("", async(req,res)=>{
    try {
        const submission = await Submission.create(req.body);
    return res.status(201).send({submission:submission});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

app.get("", async(req,res)=>{
    try {
        const submission = await Submission.find().lean().exec();
    return res.status(200).send({submission:submission});
    } catch (error) {
        return res.status(500).send({message:message});
    }
})


module.exports = router;