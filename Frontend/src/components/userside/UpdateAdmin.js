import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidenav from '../sidenav';



function UpdateAdmin() {

    let history = useHistory();
    const { id } = useParams();
    const [users,setUsers] = useState({

           adminid:"",
           name: "",
           nic: "",
           email: "",
           password: "",
           role: "",
           phone : ""
    });

     const {adminid,name,nic,email,password,role,phone} = users;
     const onInputChange = e =>{
      setUsers({...users, [e.target.name]: e.target.value});


     };


   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));

     
    await axios.put(`http://localhost:8070/user/update/${id}`, users)
    swal({

        title: "Success",

        text: "Update Successfully !!",

        icon: "success",

        button: "OK"

      });
 

    history.push("/adminlist");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8070/user/get/${id}`);
     
      setUsers(result.data);
      
  };


        return (
            <>
              <div>
      <Sidenav/>
    </div>

          <div class="container">
            <div class="title">Update Administrator</div>
            <div class="content">
              <form  onSubmit={e => onSubmit(e)}>
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Admin ID</span>
                    <input type="text" className="form-control" id="adminid" name="adminid"
                     value ={adminid} onChange={(e)=> onInputChange(e)}
                      />
                  </div>
                  <div class="input-box">
                    <span class="details">Name</span>
                    <input type="text" className="form-control" id="name" name="name"
                      value ={name} onChange={(e)=> onInputChange(e)}
                      />
                  </div>      
                  <div class="input-box">
                    <span class="details">NIC</span>
                    <input type="text" className="form-control" id="nic" name="nic"
                     value ={nic} onChange={(e)=> onInputChange(e)}
                    />
                  </div>
                  <div class="input-box">
                    <span class="details">Email</span>
                    <input type="email" className="form-control" id="email" name="email"
                     value ={email} onChange={(e)=> onInputChange(e)}
                    />

                  </div>
                  <div class="input-box">
                    <span class="details">Password</span>
                    <input type="password" className="form-control" minlength="5" maxlength="8" id="password" name="password" 
                     value ={password} onChange={(e)=> onInputChange(e)}

                        />
                  </div>
                  <div class="input-box">
                     <span class="details">Phone Number</span>
                     <input type="tel" className="form-control" id="phone" name="phone" maxLength="10" pattern="[0-9]{3}[0-9]{7}" 
                      value ={phone} onChange={(e)=> onInputChange(e)}
                      
                      />
                   </div>

                   <div class="input-box">
                     <span class="details">Role</span>
                     <select className="form-control" aria-label="Default select example" value ={role} name="role" id="role" onChange={(e)=> onInputChange(e)}>
                    
                    <option value="Admin Type">Select Admin Role</option>
                    <option value="Senior ">System </option>
                    <option value="Junior">Junior</option>
                    <option value="Junior">Senior</option>
                    </select> 
                   </div>
                 </div>


                   

                 <div class="button">
                    <input type="submit" value="Update Details"/>
                </div>
              </form>
            </div>
          </div>
     </>
            
    );

};

export default UpdateAdmin;