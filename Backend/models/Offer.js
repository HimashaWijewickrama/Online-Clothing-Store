const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offerSchema = new Schema({
    offer_id : {
        type : String,
        required : true
    },
    pro_name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    for_whom : {
        type : String,
        required: true
    },
    offer_image : {
        type : String,
        required: true
    }
    
})

const Offer = mongoose.model("Offer", offerSchema); 

module.exports = Offer;
