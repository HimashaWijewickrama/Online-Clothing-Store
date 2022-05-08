import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {GrCart} from 'react-icons/gr';

const CHeader=()=>{
  const[categories, setCategories] = useState([]);

  useEffect(()=>{
		loadUsers();
	},[]);

  const loadUsers = async ()=>{
		const result = await axios.get("http://localhost:8070/category/");
		setCategories(result.data.reverse());
	};



    return(
      <div className='header'>
        <div className="logo">
        <img className="logo1" src="/images/logo2.jpg" width={175} height={60}/>
        </div>  

      <div class="dropdown">
       <button class="dropbtn">Categories</button>
         <div class="dropdown-content">
           {categories.map((cate, index) => (
          <a href="#">{cate.cate_name}</a>
           ))}
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light navi ">
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
        <Link to='/home2' class="nav-link text-light">Home</Link>
        </li>
        <li class="nav-item">
         <Link to='/about' class="nav-link text-light">About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
        <Link to='/user_offer' class="nav-link text-light">Offer</Link>
        </li>
       </ul>
     </div>
    </nav>
   
    <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Search here..."
                   />
               
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>


       <div className="imgCart">  
       <Link to='/cart'>
       <button type="button" class="btn btn-warning">
          <GrCart size={20}  />
          </button>
          </Link>
       </div>
       
       
       <div class="dropdown-prof">
          <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to='/myprofile' class="dropdown-item">Profile</Link>
        <a class="dropdown-item" href="#">My Orders</a>
        <div class="dropdown-divider"></div>
        <Link to='/login' class="dropdown-item text-danger">Log Out</Link>
       </div>
      </div>
      <Link to='/login'><button type="button" class="btn btn-warning log">Log In</button></Link>
      </div>
    )
}
export default CHeader;