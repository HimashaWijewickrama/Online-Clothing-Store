const router = require("express").Router();
let Category = require("../models/Category");


router.route("/add_Category").post((req,res) =>{

    const cate_name = req.body.cate_name;
    const cate_description = req.body.cate_description;

    const newCategory = new Category({
        cate_name,
        cate_description
    })

    newCategory.save().then(()=>{
        res.json("Category Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Category.find().then((categories)=>{
        res.json(categories)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/delete/:id").delete(async(req,res)=> {

    const cateID = req.params.id;

    await Category.findByIdAndDelete(cateID).then(()=> {
        res.status(200).send({status: "Category was deleted"});
    }).catch((err)=> {
       console.log(err.message);
       res.status(500).send({status: "Error with delete category", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=> {

    let cateID = req.params.id;

   const category = await Category.findById(cateID).then((Category)=> {
       // res.status(200).send({status: "Category Fetched", Category})
       res.json(Category);
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "error with get category", error: err.message});  
     })

})

module.exports = router;