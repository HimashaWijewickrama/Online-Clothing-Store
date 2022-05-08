const router = require("express").Router();
let Cart = require("../models/Cart");

router.route("/add_Cart").post((req,res) =>{

    const clothe_name = req.body.clothe_name;
    const clothe_desc = req.body.clothe_desc;
    const price = Number(req.body.price);
    const product_size = req.body.product_size;
    const quantity = Number(req.body.quantity);
    const image = req.body.image;

    const newCart = new Cart({
        clothe_name,
        clothe_desc,
        price,
        product_size,
        quantity,
        image
    })

    newCart.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Cart.find().then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update_cart/:id").put(async (req,res) => {
    let itemId = req.params.id;
    const { clothe_name, clothe_desc, price, product_size, quantity,image} = req.body;

    const updateCart = {
        
        clothe_name,
        clothe_desc,
        price,
        product_size,
        quantity,
        image
    }

    const update = await Cart.findByIdAndUpdate(itemId, updateCart)
    .then(() => {
        res.status(200).send({status: "item updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
   
})

router.route("/delete/:id").delete((req,res)=>{

    let itemId = req.params.id;

    Cart.findByIdAndDelete(itemId).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/get_cart/:id").get(async (req,res) => {
    let itemId = req.params.id;
    await Cart.findById(itemId).then((cart) => {
        //res.status(200).send({status: "Bill fetched", payment})
        res.json(cart);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
    
})

module.exports = router;