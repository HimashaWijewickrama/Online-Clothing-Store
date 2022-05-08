import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineCategory} from "react-icons/md";
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import {MdOutlinePayments} from "react-icons/md";
import {MdLocalOffer} from "react-icons/md"
import {MdOutlineFeedback} from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import {HiOutlineHome} from "react-icons/hi";

function sidenav(){
 
  let iconStyles2 = {float: "left", margin:"5px", height: "20px"};
  
    return(
      <div>
      <div className="logo">
      <img src="./images/logo2.jpg" alt="" width="200px" height="110px"/>
      </div>  
        <div class="sidenav">
        
        <Link to={'/welcome'}>
        <button class="dropdown-btn">
        <HiOutlineHome style={iconStyles2} />
          Welcome
          <hr></hr>
        </button>
        </Link>
    
        <Link to={'/adminlist'}>
        <button class="dropdown-btn">
         <HiOutlineUsers style={iconStyles2} />  
          Users
          <hr></hr>
        </button>
        </Link>
     
        <Link to={'/categoryList'}>
        <button class="dropdown-btn">
        <MdOutlineCategory style={iconStyles2} />
        Categories
        <hr></hr>
        </button>
        </Link>   
       
         <Link to={'/productList'}>
         <button class="dropdown-btn">
         <MdOutlineProductionQuantityLimits style={iconStyles2} />
           Products
         <hr></hr>
        </button>
        </Link>
        
        <Link to={'/all'}>
        <button class="dropdown-btn">
        <MdOutlinePayments style={iconStyles2} />
          Payments
          <hr></hr>
        </button>
        </Link>

        <Link to={'/offer'}>
        <button class="dropdown-btn">
        <MdLocalOffer style={iconStyles2} />
          Offers
          <hr></hr>
        </button>
        </Link>

        <Link to={'/offer'}>
        <button class="dropdown-btn">
        <MdOutlineFeedback style={iconStyles2} />
          Feedbacks
          <hr></hr>
        </button>
        </Link>
      
 
      </div>
      </div>

    )
}

export default sidenav;