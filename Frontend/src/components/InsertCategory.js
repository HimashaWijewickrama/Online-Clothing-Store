import React,{useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';

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
      <div className="section">
            <h4 className="cateTopic">Insert New Category</h4>
         <form  onSubmit={sendData}>
           <div className="form-group container">
            <label for="exampleFormControlInput1">Category Name</label>
            <input type="text" className="form-control" id="cate_name" placeholder="Mens T-Shirt" required onChange={(e)=>{
            
            setCate_Name(e.target.value);
          }}/>
         </div>


         <div className="form-group container">
            <label for="exampleFormControlInput1">Category Description</label>
            <input type="text" className="form-control" id="cate_desc" placeholder="Example" required onChange={(e)=>{
            
            setCate_Desc(e.target.value);
          }}/>
         </div>
         <button type="submit" className="btn btn-primary">Submit Category</button>
        </form>

      </div>
    )
}
export default InsertCategory;