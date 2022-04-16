import React from 'react';
import { Link } from "react-router-dom";
import Sidenav from './sidenav';


// <img src="https://cdn.dribbble.com/users/207059/screenshots/14553059/media/0d1a396252374c17f4c90a8efadd819a.gif"/>
function  welcome(){
    return(
    <>
      <div>
        <Sidenav />
      </div>
      <div class="showcase-area">
          
          <div class="container">
        
             
              <div class="row">
              <h1>Welcome To Admin Portal..</h1>
             
                
                <img src="https://cdn.dribbble.com/users/207059/screenshots/14553059/media/0d1a396252374c17f4c90a8efadd819a.gif"  height={470}/>
           
               
              </div>
            </div>
           
      </div>
    </>
    );
}
export default welcome;