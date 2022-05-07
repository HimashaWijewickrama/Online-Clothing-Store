const jwt = require("jsonwebtoken");
const CUSTOMER = require("../models/customerDetails");

const authCustomer = async (req, res, next) => {

    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootCustomer = await CUSTOMER.findOne({ _id: verifyToken._id, "tokens.token":token});

        if(!rootCustomer) { throw new Error('User not found')}

        req.token = token;
        req.rootCustomer = rootCustomer;
        req.customerID = rootCustomer._id;

        next();
    
    

    }catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }

}
module.exports = authCustomer;