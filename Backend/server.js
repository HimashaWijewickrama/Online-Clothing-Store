const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;


app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Successfully connected to MongoDB!");
})
//routes of lakindu
const categoryRouter = require("./routes/category.js");
app.use("/category",categoryRouter);


const productRouter = require("./routes/product.js");
app.use("/product", productRouter);

//routes of sudeepa
const userRouter = require("./routes/userRoute.js");
 app.use("/user",userRouter); 

 const customerRouter = require("./routes/customerRoute.js");
 app.use("/customer",customerRouter); 

 //routes of tharindu
 const cartRouter = require("./routes/cart.js");
 app.use("/cart",cartRouter);

 const offerRouter = require("./routes/offer.js");
 app.use("/offer",offerRouter);

 //routes of himasha

const paymentRouter = require("./routes/payments.js");
app.use("/payment",paymentRouter);

const feedbackRouter = require("./routes/feedbacks.js");
app.use("/feedback",feedbackRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number:'+PORT);
});