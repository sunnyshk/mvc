const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    evalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'evaluation',
        required:true,
    },

    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    marks:{
        type:Number,
        required:true,
    }

},{
    timestamps:true,
})