import React from 'react';
import { Link } from "react-router-dom";
import '../css/welcome.css';


// <img src="https://cdn.dribbble.com/users/207059/screenshots/14553059/media/0d1a396252374c17f4c90a8efadd819a.gif"/>
function  welcome(){
    return(
        <React.Fragment>
            <br/>
            <br/>
       <div className="container">
           <div className="row" id="home-row">
               
               <div className="col">
               <div class="card" >
                  
                   <div className="card-body">
                     <img src='https://aux4.iconspalace.com/uploads/8477701331594621374.png' width={185} height={150}/>
                       <h5 className="card-title" >User Management</h5>
                      
                       <button type="button" class="btn btn-primary">Click Here</button>
                   </div>
             </div>
             </div>

             <div className="col">
                <div className="card" >
                   
                   <div className="card-body">
                   <img src='https://thumbs.dreamstime.com/b/suits-flat-concept-vector-icon-mens-fashion-idea-cartoon-color-illustrations-set-formal-clothes-menswear-clothing-store-shopping-178575062.jpg' width={185} height={150}/>
                       <h5 className="card-title">Categories</h5>
                       <Link to={'/sview'} className="btn btn-primary">Click Here</Link>
                   </div>
               </div>
               </div>


               <div className="col">
               <div className="card" >
                 
                   <div className="card-body">
                   <img src='https://www.theunionjournal.com/wp-content/uploads/2020/08/Product-Manager.png' width={185} height={150}/>
                       <h5 className="card-title">Product Management</h5>
                      
                       <center><button type="button" class="btn btn-primary">Click Here</button></center>
                   </div>
               </div>
               </div>

        
    
           </div>

            <br></br>
         
           <div className="row">
               <div className="col">
               <div class="card" >
                  
                   <div className="card-body">
                   <img src='https://uploads-ssl.webflow.com/5e7783f66312835b392f3113/5e7783f663128372ad2f3180_5d63c888a93ad9c0c7d5a5df_Group%202972.png' width={185} height={150}/>
                       <h5 className="card-title">Payment Management</h5>
                      
                       <Link to={'/addList'} className="btn btn-primary">Click Here</Link>
                   </div>
              </div>
              </div>

              <div className="col">
              <div className="card" >
                   
                   <div className="card-body">
                   <img src='https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1134579212_458674_qfijdq.jpg' width={185} height={150}/>
                       <h5 className="card-title">Offers Management</h5>
                      
                       <Link to={'/payments'} className="btn btn-primary">Click Here</Link>
                   </div>
               </div>
               </div>

               <div className="col">
                <div className="card" >
                   
                   <div className="card-body">
                   <img src='https://secureonlinereputation.com/wp-content/uploads/2020/02/illus-reviews-2-1024x788-1.png' width={185} height={150}/>
                       <h5 className="card-title">Review Management</h5>
                       <Link to={'/sview'} className="btn btn-primary">Click Here</Link>
                   </div>
               </div>
               </div>

               
            </div> 
       </div>
   </React.Fragment>
    )
 
}
export default welcome;