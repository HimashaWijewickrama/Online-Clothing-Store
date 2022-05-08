
import React, { useState, useEffect } from "react";
import axios from "axios";
import {ImUserPlus } from 'react-icons/im'
import { Link } from "react-router-dom";
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import swal from 'sweetalert';
import { NavLink } from "react-router-dom";
import '../../css/Table.css';
import Sidenav from '../sidenav';



const CustomerList = () => {
  const [users, setUser] = useState([]);
  const[searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/customer/view");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8070/customer/remove/${id}`);
    swal({

      title: "Success",

      text: "Delete Successfully !!",

      icon: "success",

      button: "OK"

    });
    loadUsers();
  };


    
 // };
    return(
      <>
         <div>
      <Sidenav/>
    </div>
     <main id="site-main"> 

     <div className="container-list">

     <h3 className="cateTopic"><u>Customer List</u></h3>
            <div className="box-nav d-flex justify-between">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
             
              <Link to='/adminlist'><button class="btn btn-info me-2" type="button"><b>Administrator List</b></button></Link> 
              <Link to='/customerlist'><button class="btn btn-warning me-2" type="button"><b><u>Customer List</u></b></button></Link> 
            
            </div>

              </div>
              <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Export as
            </button>
            <div class="dropdown-menu">
              <Link to="/regList"><a class="dropdown-item" href="#">PDF</a></Link>
            </div>
          </div>
              <div   className="search">
              
              <div className=" col-lg-16 mt-2 mb-2 ml-1">
                <input
                className="form-control"
                type="search"
                placeholder="search here"
                name="searchTerm"
              // onChange={this.handleTextSearch}

              onChange={(e)=>{

                setsearchTerm(e.target.value);
   
           }}
                
                />
                
              </div>
           </div>   

                <br></br>
                
               <form>
               <div className="cateb">
                   <table className="table">
                       <thead className="thead-dark">
                           <tr>
                               
                          
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Email</th>
                               <th>Password</th>
                               <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody className="tbody">
                        {users.filter(val =>{

                                  if(searchTerm === ""){

                                      return val;

                                  } else if(

                                      val.fname.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.lname.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.cemail.toLowerCase().includes(searchTerm.toLowerCase())
                                      

                                  ){

                                      return val;

                                  }

                                  })
                                                          
                        
                        
                         .map((user, index) => (
                               <tr>
                               
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.cemail}</td>
                                <td>********</td>
                                <td>
                                     

                                <Link class="btn btn-info"  to={`/customerview/${user._id}` }>
                                      <AiFillEye size="23px" color="white"/>
                                  
                                       
                                 </Link>
                                       

                                     <Link class="btn btn-danger" onClick={() => deleteUser(user._id)}>
                                     <FaTrashAlt size="23px" color="white"/>
                                  
                                       
                                     </Link>
                                </td>
                            </tr>
                              ))}
                        </tbody>
                    </table>
                    </div>
                  
                </form>       

           </div>
  
     </main>   
     </>
    )
}

export default CustomerList;