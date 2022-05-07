const jwt = require('jsonwebtoken');
const mongoose =require('mongoose');
const bcrypt  = require('bcryptjs');
const Schema = mongoose.Schema;

const customerSchema =new Schema({


    fname : {
        type : String,
        required:true
     
    },

    lname : {
        type : String,
        required:true
     
    },
    
    cemail : { 
        type : String,
        required:true

    },


    cpassword :{
        type : String,
        required : true,
        
    },

     ccpassword : {
        type: String,
        required: true
    },

    resetToken:{
            String,
            expireToken:Date,
    },
    tokens: [
        {
            token : {
                type : String,
                required: true
            }
        }
    ]

});





//Hashing Password

customerSchema.pre('save', async function (next){
    console.log("Hi I am pre");
    if(this.isModified('cpassword')){
        console.log("Hi I am pre password");
        this.cpassword = await bcrypt.hash(this.cpassword,6);
       
    }
    next();
});

// generate token

customerSchema.methods.generateAuthToken = async function (){
    try{
        
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
         this.tokens = this.tokens.concat({token:token});
         await  this.save();
         return token;
    }catch(err){
        console.log(err);
    }
}

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer; //Export 
