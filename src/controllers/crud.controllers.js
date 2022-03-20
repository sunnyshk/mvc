const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const Submission = require('../models/submission.models');

router.get("/:id", async(req,res)=>{
    try {
        const {id} = req.params;

        const submission = await Submission.find({evaId: id});
        return res.status(201).send({submission:submission});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})


router.get("",async(req,res)=>{
    try {
        const highestMarks = await Submission.find({}).populate('studentId');
        highestMarks.sort((a,b)=>{
            return Number(b.marks) - Number(a.marks);
        });
        
        return res.status(200).send(highestMarks[0]);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports = router;
