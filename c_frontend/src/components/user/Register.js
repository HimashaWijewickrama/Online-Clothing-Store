
import React, { Fragment, useState} from 'react';
import {useHistory}  from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const Register = () => {

let history = useHistory();
const [fname,setFname] = useState("");
const [lname,setLname] = useState("");
const [cemail,setCemail]= useState("");
const [cpassword,setCpassword]= useState("");
const [ccpassword,setCcpassword]= useState("");


function sendDetails(e){
e.preventDefault();

     const  newCustomer = {

     fname,
     lname,
     cemail,
     cpassword,
     ccpassword
     
     }

axios.post("http://localhost:8070/customer/signup",newCustomer).then(()=>{

swal({

     title: "Success",

     text: "Registration Successfull !!",

     icon: "success",

     button: "OK"

   });


console.log(" Registration Successfull");


history.push("/login");


}).catch((err)=> {


swal({

     title: "Warning",

     text: "Invalid Registration !!",

     icon: "warning",

     button: "OK"

   });

console.log("Invalid Registration");
})

};




    return (
        <Fragment>

            <div className="row wrapper">
                <div className="col-10 col-lg-4">
                    <form  action="" onSubmit={sendDetails} className="shadow-lg" encType='multipart/form-data'>
                        <h1 className="mb-3">Register</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">First Name</label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                className="form-control"
                                onChange={(e)=>{ setFname(e.target.value); }}
                                placeholder="Enter First Name"
                                required
                             
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                className="form-control"
                                name='lname'
                                onChange={(e)=>{ setLname(e.target.value); }}
                                placeholder="Enter Last Name"
                                required

                               
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                              type="email"
                              id="cemail"
                              className="form-control"
                              name='cemail'
                              onChange={(e)=>{ setCemail(e.target.value); }}
                              placeholder="Enter Email"
                              required
                              
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                               type="password"
                               id="cpassword"
                               className="form-control"
                               name='cpassword'
                               onChange={(e)=>{ setCpassword(e.target.value); }}
                               placeholder="Enter Password"
                               required
                              
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Confirm Password</label>
                            <input
                                 type="password"
                                 id="ccpassword"
                                 className="form-control"
                                 name='ccpassword'
                                 onChange={(e)=>{ setCcpassword(e.target.value); }}
                                 placeholder="Enter Confirm Password"
                                 required
                              
                            />
                        </div>
                      
                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                          
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default Register
