const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    feedid:{
        type:String,
        required:true
    },

    cusname:{
        type:String,
        required:true
    },
    
    subject: {
        type:String,
        required:true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }



})

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;