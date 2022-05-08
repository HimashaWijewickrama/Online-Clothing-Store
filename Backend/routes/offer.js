const router = require("express").Router();
let Offer = require("../models/Offer");

router.route("/add_Offer").post((req,res) =>{

    const offer_id = req.body.offer_id;
    const pro_name = req.body.pro_name;
    const description = req.body.description;
    const for_whom = req.body.for_whom;
    const offer_image = req.body.offer_image;


    const newOffer = new Offer({
        offer_id,
        pro_name,
        description,
        for_whom,
        offer_image
    })

    newOffer.save().then(()=>{
        res.json("Offer Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/offer").get((req,res)=>{

    Offer.find().then((offer)=>{
        res.json(offer)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_offer/:id").put(async (req,res) => {
    let offId = req.params.id;
    const {offer_id, pro_name, description, for_whom, offer_image} = req.body;

    const updateOffer = {
        
        offer_id,
        pro_name,
        description,
        for_whom,
        offer_image
    }

    const update = await Offer.findByIdAndUpdate(offId, updateOffer)
    .then(() => {
        res.status(200).send({status: "offer updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
   
})

router.route("/delete/:id").delete((req,res)=>{

    let offId = req.params.id;

    Offer.findByIdAndDelete(offId).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/get_offer/:id").get(async (req,res) => {
    let offId = req.params.id;
    await Offer.findById(offId).then((offer) => {
        //res.status(200).send({status: "Bill fetched", payment})
        res.json(offer);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
    
})

module.exports = router;