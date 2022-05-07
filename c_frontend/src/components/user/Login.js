import React,{Fragment, useState} from 'react';
import {useHistory }  from "react-router-dom";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


const Login = () => {

    let history = useHistory();

    const [cemail,setCemail] = useState('');
    const [cpassword, setCpassword] = useState('');

    const loginCustomer = async (e) => {
        e.preventDefault();

        const res   =  await fetch('http://localhost:8070/customer/login', {

            method :"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cemail,
                cpassword
            })
        });
 
        const data =  res.json();
        if(res.status === 400 || !data){
            swal({

                title: "Warning",
    
                text: "Invalid Credentials !!",
    
                icon: "warning",
    
                button: "OK"
    
              });
         
            console.log("Invalid Credentials");

        }else{

            swal({

                title: "Success",
    
                text: "Login Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
            
            console.log("Login Successfully !!");
            history.push("/home")
        }
    }

    
   
    return (
        <Fragment>
           
                    <div className="row wrapper">
                        <div className="col-10 col-lg-4">
                            <form  method="POST" className="shadow-lg">
                                <h1 className="mb-3">Login</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        className="form-control"
                                        type="email" id="cemail" name="cemail"
                                        value={cemail}
                                        onChange={(e) => setCemail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Password</label>
                                
                                    <input
                                        className="form-control"
                                        type="password" id="cpassword" name="cpassword"
                                        value={cpassword}
                                        onChange={(e) => setCpassword(e.target.value)}
                                        required
                                      
                                    />
                                    

                                </div>

                                <Link to="/reset" className="float-right mb-4">Forgot Password?</Link>

                                <button
                                    id="signin"
                                    name='signin'
                                    value='Login'
                                    onClick = {loginCustomer}
                                    type="submit"
                                    className="btn btn-block py-3"
                                >
                                    LOGIN
                                </button>

                                <Link to="/signup" className="float-right mt-3">New User?</Link>
                            </form>
                        </div>
                    </div>
               
        
        </Fragment>
    )
}

export default Login
