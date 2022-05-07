import React from 'react';
import '../../css/about.css';
import { Link } from 'react-router-dom';

function About(){
     
    return(
      
     <>
        <div class="wra">
    
            <div class="background-container">
                <div class="bg-1"></div>
                <div class="bg-2"></div>
        
            </div>
            <div class="about-container">
                
                <div class="image-container">
                    <img src="https://cdn.dribbble.com/users/2424870/screenshots/9681857/media/e2ba35a0106e60cb0960f3963304cef8.gif" alt="" />
                    
                </div>
    
                <div class="text-container">
                    <h1>About us</h1>
                    <p><b>Our System Name is Shopee and this is a Online Clothing Store.You can Join with us. You can choose and buythe any category type of cloths in our system. we are Shopee Grup. Colombo 7, Sri Lanka.</b></p>
                     <Link to='/login'>Back To Page</Link>
                </div>
                
            </div>
        </div>
        
     </>
    )
}
export default About;