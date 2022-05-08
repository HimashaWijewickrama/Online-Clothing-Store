const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({


    cusid: {
        type: String,
        required: true
    },
    payid: {
        type: String,
        required: true
    },
    paymethod: {
        type: String,
        required: true
    },
    cardnumber: {
        type: Number,
        required: true
    },

    cardholdername: {
        type: String,
        required: true
    },
    
    expiry: {
        type: String,
        required: true
    },

    cvc: {
        type: Number,
        required: true
    },

    totamount: {
        type: Number,
        required:true
    }



})

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;