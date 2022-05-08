import React,{useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import Sidenav from '../sidenav';

function InsertCategory(){

     let history = useHistory();

     const [cate_name, setCate_Name]= useState("");
     const [cate_description, setCate_Desc]= useState("");

     function sendData(e){
      e.preventDefault();
         
      const newCategory={
        cate_name,
        cate_description
      }
      axios.post("http://localhost:8070/category/add_Category", newCategory).then(()=>{
        swal({
          title: "Success",
          text: "Successfully Inserted the Category!",
          icon: "success",
          button: "OK"
        });
        history.push("/categoryList");
 
      }).catch((err)=>{
        alert(err)
      })
     }

    return(
      <>
      <div>
  <Sidenav/>
</div>
        <div class="container">
        <div class="title">Insert Product</div>
        <div class="content">
         <form  onSubmit={sendData}>
         <div class="user-details">

         <div class="input-box">
                        <span class="details">Category Name</span>
            <input type="text" className="form-control" id="cate_name" placeholder="Mens T-Shirt" required onChange={(e)=>{
            
            setCate_Name(e.target.value);
          }}/>
         </div>


         <div class="input-box">
                        <span class="details">Category Description</span>
            <input type="text" className="form-control" id="cate_desc" placeholder="Branded Category" required onChange={(e)=>{
            
            setCate_Desc(e.target.value);
          }}/>
         </div>
         </div>
         <div class="button">
         <input type="submit" value="Submit Category"/>
         </div>
        </form>
        </div>
      </div>
      </>
    )
}
export default InsertCategory;