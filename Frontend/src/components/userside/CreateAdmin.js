import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidenav from '../sidenav';


export default function CreateAdmin(){
    
    let history = useHistory();
    const [adminid,setadminId] = useState("");
    const [name,setName]= useState("");
    const [nic,setNic]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [role,setRole]= useState("");
    const[phone,setPhone] = useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newUser = {

            adminid,
            name,
            nic,
            email,
            password,
            role,
            phone
         }
         
         axios.post("http://localhost:8070/user/add",newUser).then(()=>{
            swal({

                title: "Success",
    
                text: "User Added Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
  

             history.push("/adminlist");
             

             
    
             

         }).catch((err)=> {

            alert(err)
         })

    }

        return (
          <>
                <div>
                    <Sidenav />

                </div>

              <div class="container">
                <div class="title">Add New Administrator</div>
                <div class="content">
                  <form action="/adminlist" onSubmit={sendDetails}>
                    <div class="user-details">
                      <div class="input-box">
                        <span class="details">Admin ID</span>
                        <input type="text" className="form-control" id="adminId" onChange={(e)=>{
                           
                          setadminId(e.target.value);}}
                          placeholder="Enter Id"
                          required
                          />
                      </div>
                      <div class="input-box">
                        <span class="details">Name</span>
                        <input type="text" className="form-control" id="fname" onChange={(e)=>{
                          
                          setName(e.target.value); }}
                          placeholder="Enter Name"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">NIC</span>
                        <input type="text" className="form-control" id="nic" onChange={(e)=>{
                         
                        setNic(e.target.value);  }}
                        placeholder="Enter NIC"
                        required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Email</span>
                        <input type="email" className="form-control" id="email" onChange={(e)=>{
                          
                        setEmail(e.target.value); }}
                        placeholder="Enter Email"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Password</span>
                        <input type="password" className="form-control" minlength="5" maxlength="8" id="password" onChange={(e)=>{
                          
                         setPassword(e.target.value);}}
                         placeholder="Enter Password"
                            required
                            />
                      </div>
                      <div class="input-box">
                         <span class="details">Phone Number</span>
                         <input type="tel" className="form-control" id="phonenum" maxLength="10" pattern="[0-9]{3}[0-9]{7}" onChange={(e)=>{
                          
                          setPhone(e.target.value);
                          }}
                          placeholder="Enter Phone number"
                          required
                          />
                       </div>

                       <div class="input-box">
                         <span class="details">Role</span>
                         <select className="form-control" aria-label="Default select example" onChange={(e)=>{  setRole(e.target.value);}} required>
                        
                        <option value="Admin Type">Select Admin Role</option>
                        <option value="Senior ">System </option>
                        <option value="Junior">Junior</option>
                        <option value="Junior">Senior</option>
                        </select> 
                       </div>
                     </div>


                       


                     
  
                     <div class="button">
                      <input type="submit" value="Save Details"/>
                    </div>
                  </form>
                </div>
              </div>
         </>
            
    );

};

