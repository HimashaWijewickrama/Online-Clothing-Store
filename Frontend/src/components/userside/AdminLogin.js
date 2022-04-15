import React,{useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory }  from "react-router-dom";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import '../../css/AdminLogin.css';



const AdminLogin = () => {

    let history = useHistory();

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res   =  await fetch('http://localhost:8070/user/signin', {

            method :"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
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
            history.push("categoryList")
        }
    }
        return (
            <div class="center">
            <h1>Admin Login</h1>
            <form method="post">
              <div class="txt_field">
                <input type="text" required/>
                <span></span>
                <label>Username</label>
              </div>
              <div class="txt_field">
                <input type="password" required/>
                <span></span>
                <label>Password</label>
              </div>
              <div class="pass">Forgot Password?</div>
              <input type="submit" value="Login"/>
              <div class="signup_link">
                Not a member? <a href="#">Signup</a>
              </div>
            </form>
          </div>
    );

};

export default AdminLogin;