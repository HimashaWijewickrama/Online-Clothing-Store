const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({

    clothe_name : {
        type : String,
        required: true
    },
    clothe_desc : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    product_size: {
        type : String,
        required: true
    },
    quantity: {
        type : Number,
        required: true
    },
    image:{
        type:String,
        required:true
    }


})

const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;