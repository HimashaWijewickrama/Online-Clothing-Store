import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import swal from 'sweetalert';
import Sidenav from '../sidenav';


const ProductList=() => {
      const[products, setProducts] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8070/product/");
        setProducts(result.data.reverse());
      };
    
      const deleteProduct = async id =>{
        await axios.delete(`http://localhost:8070/product/delete/${id}`);
        swal({
          title: "Success",
          text: "Product Deleted Successfully!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
       <div>
      <Sidenav/>
       </div> 
      <div className="section">
       <h3 className="cateTopic"><u>Product List</u></h3>
          <div className="btnadd">
             <Link to={'/insert_product'}>
             <button type="button" class="btn btn-success">Insert Product</button>
              </Link>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Export as
            </button>
            <div class="dropdown-menu">
              <Link to="/reportView"><a class="dropdown-item" href="#">PDF</a></Link>
            </div>
          </div>
          <form >
        <input className="form-control me-2 search" type="text" placeholder="Search Product" name="search" onChange={(e)=>{
             setsearchTerm(e.target.value);
	}} />
      
      </form >
          <div className="catetb">
         < table className="table">
            <thead className="thead-dark">
                 <tr>
                    <th scope="col">Product name</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Size</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {products.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.clothe_name.toLowerCase().includes(searchTerm.toLowerCase())|| val.clothe_cate.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((prod, index) => (
               
                <tr>
                <td>{prod.clothe_name}</td>
                <td>{prod.clothe_desc}</td>
                <td>{prod.price}.00</td>
                <td>{prod.clothe_cate}</td>
                <td>{prod.size}</td>
                <td><img src={"./prodImage/"+prod.image} width="45px" height="45px"></img></td>
                <td> 
                   
                   <Link className="btn btn-success space" to={`/updateProduct/${prod._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" onClick={() => deleteProduct(prod._id)}>
                  <FaTrashAlt size="20px" color="white"/></Link> 
                  </td>
               </tr>
                    ))}
            </tbody>
          </table>
          </div>
      </div>
      </>
    )
}
export default ProductList;