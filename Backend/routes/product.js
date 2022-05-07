const router = require("express").Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require("path");
let Product = require("../models/Product");


/*const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../images');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname +'-'+ Date.now() + path.extname(file.originalname));
        console.log(file);
    }
});

const fileFilter = (req, file, cb) =>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
let upload = multer({storage, fileFilter});
*/

router.route("/addProduct").post((req,res) =>{

    const clothe_id = req.body.clothe_id;
    const clothe_name = req.body.clothe_name;
    const clothe_desc = req.body.clothe_desc;
    const price = req.body.price;
    const clothe_cate = req.body.clothe_cate;
    const size = req.body.size;
    const image = req.body.image;

    const newProduct = new Product({
        clothe_id,
        clothe_name,
        clothe_desc,
        price,
        clothe_cate,
        size,
        image

    })

    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let prodID = req.params.id;
    const{ clothe_name, clothe_desc, price, clothe_cate, size, image} = req.body;

    const updateProduct = {
 
        clothe_name,
        clothe_desc,
        price,
        clothe_cate,
        size,
        image
    }

    const update = await Product.findByIdAndUpdate(prodID, updateProduct).then(()=> {

        res.status(200).send({status:"Product updated" })
    }).catch((err)=> {
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:id").delete(async(req,res)=> {

    const prodID = req.params.id;

    await Product.findByIdAndDelete(prodID).then(()=> {
        res.status(200).send({status: "Product was deleted"});
    }).catch((err)=> {
       console.log(err.message);
       res.status(500).send({status: "Error with delete Product", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=> {

    let prodID = req.params.id;

   const product = await Product.findById(prodID).then((Product)=> {
       // res.status(200).send({status: "Doctor Fetched", Doctor})
       res.json(Product);
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "error with get product", error: err.message});  
     })

})

module.exports = router;