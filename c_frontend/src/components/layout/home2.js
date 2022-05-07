import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaCartPlus} from 'react-icons/fa';

const Home2=() =>{
      const[products, setProducts] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8070/product/");
        setProducts(result.data.reverse());
      };
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
     <div className="input-groups">
                <input
                    type="text"
                    id="search_fields"
                    className="form-control"
                    placeholder="Search Product..."onChange={(e)=>{
                      setsearchTerm(e.target.value);
             }} />
               
            </div>
     <div className="raw">
     {products.filter(val =>{

                if(searchTerm === ""){

                    return val;

                } else if(

                  val.clothe_name.toLowerCase().includes(searchTerm.toLowerCase())|| val.clothe_cate.toLowerCase().includes(searchTerm.toLowerCase())
                ){

                return val;

                }

                }).map((prod, index) => (
                    <div class="card" >
                        <div className="card-body">
                       
                         <><img src={"./prodImage/"+prod.image} width="160px" height="160px"></img>
                         <h5 className="card-title">{prod.clothe_name}</h5>
                         <h6>Rs.{prod.price}.00</h6>
                         <button className="btn btn-warning "> <FaCartPlus /> Add to cart   </button></>
                        
                        </div>
                      
                  </div>
                      ))}
                  
  
                  </div>
                </div>
    
    )
}
export default Home2;