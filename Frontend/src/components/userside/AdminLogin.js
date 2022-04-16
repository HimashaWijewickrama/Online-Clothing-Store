import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import '../../css/AdminLogin.css';


import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'



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


          const [type, setType]=useState('password');
          const [icon, setIcon]=useState(eyeOff);

          const handleToggle=()=>{    
            if(type==='password'){
              setIcon(eye);      
              setType('text');
            }
            else{
              setIcon(eyeOff);     
              setType('password');
            }
          }

    
        return (
        <>
          <div className="logo">
          <img src="./images/logo2.jpg" alt="" width="200px" height="110px"/>
          </div>  
            <div class="center">
            <h1>Admin Login</h1>
            <form method="POST">
              <div class="txt_field">
                <input type="email" id="email" name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>

                <span></span>
                <label>Email</label>
              </div>
              
              <div class="txt_field">
             
                <input type={type} id="password"name="password"
                value={password}
                
                onChange={(e) => setPassword(e.target.value)}
                required
                
                />
                 
                
                 <Icon className='hash'onClick={handleToggle} icon={icon} size={20}/>
                <label>Password</label>
              </div>

              <Link to={'/reset'}><div class="pass">Forgot Password?</div></Link>
              <input type="submit" name = "signin" id="signin" 
               value="Login"
               onClick = {loginUser}
              
              />
              
              <div class="signup_link">
              <Link to={'/welcome'}>
                Not a member? <a href="#">Signup</a>
                </Link>
              </div>
            </form>
          </div>
         </>  
         
    );

};



export default AdminLogin;