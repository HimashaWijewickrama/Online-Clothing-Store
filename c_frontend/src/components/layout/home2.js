import React from "react";
import {FaCartPlus} from 'react-icons/fa';

function home2(){
    return(
      <div className="middle">
        <div id="slideshow">
       <div class="slide-wrapper">
        <div class="slide">
          <img src="./images/1.jpg" width="1028px" height="210px"></img>
        </div>
        <div class="slide">
        <img src="./images/2.jpg" width="1028px" height="210px"></img>
        </div>
        <div class="slide">
        <img src="./images/3.jpg" width="1028px" height="210px"></img>
        </div>
        <div class="slide">
        <img src="./images/4.jpg" width="1028px" height="210px"></img>
        </div>
      </div>
     </div>
     <h3 className="text5">Latest Arrivals</h3>
     <div className="raw">
                    <div class="card" >
                        <div className="card-body">
                         <img src="./images/p1.jpg" width="160px" height="160px"></img>
                            <h5 className="card-title" >Georgette Printed Party Frock</h5>
                            <h6>Rs. 1200.00</h6>
                            <button className="btn btn-warning "> <FaCartPlus/> Add to cart   </button>
                        </div>
            
                  </div>
                  <div class="card" >
                        <div className="card-body">
                         <img src="./images/p2.jpg" width="160px" height="160px"></img>
                            <h5 className="card-title" >Long Sleave Womens Blouse</h5>
                            <h6>Rs. 1000.00</h6>
                            <button className="btn btn-warning bt"> <FaCartPlus/> Add to cart   </button>
                        </div>
                  </div>
                  <div class="card" >
                        <div className="card-body">
                         <img src="./images/p3.jpg" width="160px" height="160px"></img>
                            <h5 className="card-title" >Plain Mens Office Trousers</h5>
                            <h6>Rs. 1740.00</h6>
                            <button className="btn btn-warning bt"> <FaCartPlus/> Add to cart   </button>
                        </div>
                  </div>
                  <div class="card" >
                        <div className="card-body">
                         <img src="./images/p4.jpg" width="160px" height="160px"></img>
                            <h5 className="card-title" >Adidas Short Sleaves</h5>
                            <h6>Rs. 1000.00</h6>
                            <button className="btn btn-warning bt"> <FaCartPlus/> Add to cart   </button>
                        </div>
                  </div>
                  <div class="card" >
                        <div className="card-body">
                         <img src="./images/p5.jpg" width="160px" height="160px"></img>
                            <h5 className="card-title" >Levis Smart Short Sleave</h5>
                            <h6>Rs. 1100.00</h6>
                            <button className="btn btn-warning bt"> <FaCartPlus/> Add to cart   </button>
                        </div>
                  </div>
  
                  </div>
                </div>
    
    )
}
export default home2;