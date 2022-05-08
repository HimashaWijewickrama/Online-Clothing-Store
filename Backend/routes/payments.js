const router = require("express").Router();

let Payment = require("../models/Payment");



//add new payment
router.route("/add").post((req,res)=>{

    const cusid = req.body.cusid;
    const payid = req.body.payid;
    const paymethod = req.body.paymethod;
    const cardnumber = Number(req.body.cardnumber);
    const cardholdername = req.body.cardholdername;
    const expiry = req.body.expiry;
    const cvc = Number(req.body.cvc);
    const totamount = Number(req.body.totamount);

    const newPayment = new Payment({

        cusid, 
        payid,
        paymethod,
        cardnumber,
        cardholdername,
        expiry,
        cvc,
        totamount

    })
    newPayment.save().then(()=>{
        res.json("Payment Added")

    }).catch((err)=>{
        console.log(err);
    })


})




//view payments
router.route("/all").get((req,res)=>{
    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
})
//update payment using paymentid
router.route("/update/:id").put(async(req,res)=> {
    let patId = req.params.id;
    const {cusid, 
        payid,
        paymethod,
        cardnumber,
        cardholdername,
        expiry,
        cvc,
    totamount} = req.body;

    const updatePayment = {
        cusid, 
        payid,
        paymethod,
        cardnumber,
        cardholdername,
        expiry,
        cvc,
        totamount
    }

    const update = await Payment.findByIdAndUpdate(patId, updatePayment).then(() => {
        res.status(200).send({status: "Payment ID updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})
//delete payment using id
router.route("/delete/:id").delete(async (req, res) => {

    let patId = req.params.id;

    await Payment.findByIdAndDelete(patId).then(() => {
        res.status(200).send({status : "Payment deleted"});
}).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete payment", error: err.message});
    })
})




//fetch data
router.route("/get/:id").get(async(req, res) => {
    let patId = req.params.id;
    await Payment.findById(patId).then((payment) => {
        //res.status(200).send({status: "Item fetched", material})
        res.json(payment);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router;