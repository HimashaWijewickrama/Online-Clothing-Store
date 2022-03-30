const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    cate_name : {
        type : String,
        required : true
    },
    cate_description : {
        type : String,
        required : true
    }
})

const Category = mongoose.model("Category", categorySchema); 

module.exports = Category;
