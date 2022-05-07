const jwt = require('jsonwebtoken');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const authCustomer = require("../middleware/authCustomer");

let CUSTOMER = require("../models/customerDetails");// import customerDetails.js model
const Customer = require('../models/customerDetails');



// ADD
http://localhost:8070/customer/insert
router.route("/insert").post((req,res)=>{//post method for add data 

     const fname = req.body.fname;
     const lname = req.body.lname;
     const cemail = req.body.cemail;
     const cpassword = req.body.cpassword;
     const ccpassword = req.body.ccpassword;
     
     
    
     

     const newCustomer = new CUSTOMER({
         
        fname,
        lname,
        cemail,
        cpassword,
        ccpassword,
    
     })
       
     //Exception handlling
     newCustomer.save().then(()=>{ //js promiss
         res.json("login details added!!")  //send a request from json format to front end

     }).catch((err)=>{
              console.log (err);
     })   
})  



// Retrive  [Using GET http request method]
http://localhost:8070/customer/view
router.route("/view").get((req,res)=>{

    //body

    CUSTOMER.find().then((see)=>{
           res.json(see)
    }).catch((err)=>{
        console.log (err);
    })   
})

http://localhost:8070/customer/edit/
router.route("/edit/:id").put(async(req,res)=>{
    let customerId = req.params.id ;  

    //D-Structure

    const{fname,lname,cemail,cpassword,ccpassword} = req.body;

    const editUser = {

        fname,
        lname,
        cemail,
        cpassword,
        ccpassword
        
    }

    const edit = await CUSTOMER.findByIdAndUpdate(customerId,editUser).then(()=>{

        res.status(200).send({status: "User Updated" })
    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error Occured!! "})   //also send to error for fontEnd
    })
}) 


   //Delete
 http://localhost:8070/customer/remove
   router.route("/remove/:id").delete(async(req,res) =>{

       let customerid = req.params.id;

       await CUSTOMER.findByIdAndDelete(customerid).then(() =>{

           res.status(200).send({status: "Delete Successfully!!"});

       }).catch((err) =>{

             console.log(err.message);
             res.status(500).send({status: "Erroe with delete User", error : err.message});
       })
   })
   
    //fetch one of user details[Using GET method]

    router.route("/getone/:id").get(async(req,res) =>{

        let fname = req.params.id;
        const customer = await CUSTOMER.findById(fname).then((customer) =>{

           // res.status(200).send({status : "user fetched",user})
           res.json(customer);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error with get User", error : err.message})
        
        })
    })

     //register
     http://localhost:8070/customer/signup
    router.post('/signup', async(req,res) =>{
        const{fname,lname,cemail,cpassword,ccpassword} = req.body;
    
        if( !fname || !lname|| !cemail || !cpassword || !ccpassword){
            return res.status(422).json({error:"Plz filled the field properly"});
        }
        try{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
             
            const patientImp = await CUSTOMER.findOne({cemail:cemail});

            if(patientImp){
                return res.status(422).json({error:"Email already Exist"});
            }else if (cpassword !== ccpassword) {

                return res.status(422).json({error:"Password are not matching"});
            } else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            

            const customer = new CUSTOMER({fname,lname,cemail,cpassword,ccpassword});

            await customer.save()
            .then(customer=>{

            

                res.status(201).json({message:"Thanks for signing up"});

            })
            .catch(err=>{
                console.log(err)
            })
        }

        }catch(err){
            console.log(err);
        }
    });
    
     //Login route
    router.post('/login', async(req,res) =>{

        try{
              let token;
              const {cemail, cpassword} = req.body;

              if(!cemail || !cpassword){
                  return res.status(400).json({error:" Plz! Filled the data"});
              }

              const customerLogin = await CUSTOMER.findOne({cemail:cemail});
              //console.log(userLogin);

           if(customerLogin ){

                const isMatch = await bcrypt.compare(cpassword, customerLogin.cpassword);
              
               const  token  = await customerLogin.generateAuthToken(); //see thsis
                 console.log(token);
 


                 res.cookie('jwtoken', token, {
                     expires:new Date(Date.now() + 25892000000),
                     httpOnly: true
                 });

               if(!isMatch){

                res.status(400).json({error: "Invalid password!"});

               }else{

                res.json({message: "Login successfully!!"})
               }


               //
              
               //

               } else{

                res.status(400).json({error: "Invalid credentials !"});
               }


        }catch(err){
           console.log(err);
        }
    });

    /*
//reset-password
    router.post('/reset-password', (req,res)=>{
        crypto.randomBytes(32,(err,buffer)=>{
            if(err){
                console.log(err);
            }
            const token  = buffer.toString("hex")
            USER.findOne({email:req.body.email})
            .thrn(user=>{
                if(!user){
                    return res.status(422).json({error:"user dont with email"})
                }
                user.resetToken = token
                user.expireToken = Date.now() + 3600000
                user.save().then((result) =>{
                    transporter.sendMail({
                        to:user.email,
                        from:"no-replay@insta.com",
                        subject:"password reset",
                        html:`
                        <p> You requested for password reset</p>
                        <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a></h5>
                        
                        `

                    })
                    res.json({message:"check your email"})
                })
                
            })
        })
    })
*/

       //Logout
       router.get('/logout',(req,res) => {
        console.log("Hello");
        res.clearCookie('jwtoken', {path: '/'})
        res.status(200).send("User logout");

   });

  /*
//GET CURRENT LOG IN USER
exports.userProfile = async (req, res, next) =>{
  
    const customer = await Customer.findById(req.user.id);
    res.status(200).json({
      success: true,
      customer
    });
  
  
  }
*/

module.exports = router;   // modules export
//mongodb+srv://Saranga:WMQqeUeAiTIuUVm9@userdb.1fach.mongodb.net/user_db?retryWrites=true&w=majority