import React from "react";
import {HiSearch} from "react-icons/hi";

function adminHead(){

  let serachstyle = {height:"30px"};
    return(
      <div className="adHead">
        <h2 className="topic">Admin Portal</h2>
        <form class="d-flex">
        <input class="form-control me-2 search_in" type="search" placeholder="Search..." aria-label="Search" >
        </input> 
      </form>
      <div class="dropdown">
       <button class="dropbtn">English</button>
       <div class="dropdown-content">
        <a href="#">English</a>
        <a href="#">Sinhala</a>
        <a href="#">Tamil</a>
       </div>
     </div>
     <div className="adminProf">
        <img src="./images/profile.png" alt="Profile" width ="50px" height="50px"/>
     </div>
      </div>

      
    )
}
export default adminHead;