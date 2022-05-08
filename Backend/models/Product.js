const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    clothe_id: {
        type : String,
        required : true
    },
    clothe_name: {
        type : String,
        required : true
    },
    clothe_desc: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    clothe_cate: {
        type : String,
        required : true
    },
    size: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    }

})
const Product = mongoose.model("Product", productSchema); 

module.exports = Product;
