import React from 'react';
import {GrCart} from 'react-icons/gr';
import { Link } from 'react-router-dom';

function cHeader(){
    return(
      <div className='header'>
        <div className="logo">
        <img src="/images/logo2.jpg" width={175} height={60}/>
        </div>  

      <div class="dropdown">
       <button class="dropbtn">Categories</button>
         <div class="dropdown-content">
          <a href="#">Mens-Trousers</a>
          <a href="#">Mens-T-shirts</a>
          <a href="#">Womens-Blouse</a>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light navi ">
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link text-light" href="#">Home </a>
        </li>
        <li class="nav-item">
         <Link to='/about' class="nav-link text-light">About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Offers</a>
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
       <button type="button" class="btn btn-warning">
          <GrCart size={20}  />
          </button>
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
export default cHeader;