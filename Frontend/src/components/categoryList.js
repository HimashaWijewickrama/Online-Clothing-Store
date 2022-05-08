import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"
import swal from 'sweetalert';
import Sidenav from './sidenav';

const CategoeyList=() => {

   const[categories, setCategories] = useState([]);
   const[searchTerm, setsearchTerm] = useState("");

   useEffect(()=>{
		loadUsers();
	},[]);

   const loadUsers = async ()=>{
		const result = await axios.get("http://localhost:8070/category/");
		setCategories(result.data.reverse());
	};

   const deleteCategory = async id =>{
		await axios.delete(`http://localhost:8070/category/delete/${id}`).then(()=>{
         swal({
           title: "Success",
           text: "Successfully Deleted the Category!",
           icon: "success",
           button: "OK"
         });
  
       }).catch((err)=>{
         alert(err)
       })
		loadUsers();
	};

    return(
      <>
      <div>
      <Sidenav/>
    </div>
     
      <div className="section">
           <h3 className="cateTopic"><u>Categoey List</u></h3>
          <div className="btnadd">
             <Link to={'/insert_cate'}>
             <button type="button" class="btn btn-success">Insert Category</button>
              </Link>
          </div>
          <form >
        <input className="form-control me-2 search" type="text" placeholder="Search Category" name="search" onChange={(e)=>{
             setsearchTerm(e.target.value);
		}} />
      </form >
          <div className="catetb">
         < table className="table">
            <thead className="thead-dark">
                 <tr>
                    <th scope="col">Category name</th>
                    <th scope="col">Category Description</th>
                    <th scope="col">Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
               {categories.filter(val =>{

                     if(searchTerm === ""){

                         return val;

                     } else if(

                       val.cate_name.toLowerCase().includes(searchTerm.toLowerCase())
                    ){

                      return val;

                    }

                    })

                  .map((cate, index) => (
                <tr>
                <td>{cate.cate_name}</td>
                <td>{cate.cate_description}</td>
                <td> 
                   
                  <Link className="btn btn-danger" onClick={() => deleteCategory(cate._id)}>
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
export default CategoeyList;