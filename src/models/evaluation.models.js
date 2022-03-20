const mongoose = require('mongoose');

const evalSchema = new mongoose.Schema({
    dateOfEval:{type:String,required:true},
    instructorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    batchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'batches',
        required:true,
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model('evaluation',evalSchema);