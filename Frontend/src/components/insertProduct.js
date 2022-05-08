import React,{useState , useEffect} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../css/Forms.css';
import axios from "axios";
import Sidenav from './sidenav';


 const InsertProduct= ()=>{
       let history = useHistory();
        const[categories, setCategories] = useState([]);

        const [clothe_id, setClothe_Id]= useState("");
        const [clothe_name, setClothe_Name]= useState("");
        const [clothe_desc, setClothe_Desc]= useState("");
        const [price, setPrice]= useState("");
        const [clothe_cate, setClothe_Cate]= useState("");
        const [size, setClothe_Size]= useState("");
        const [image, setClothe_Image]= useState("");
        
       
        useEffect(()=>{
          loadUsers();
        },[]);

        const loadUsers = async ()=>{
          const result = await axios.get("http://localhost:8070/category/");
          setCategories(result.data.reverse());
        };

       
        function sendData (e) {
          e.preventDefault();
         
          const newProduct = {

            clothe_id,
            clothe_name,
            clothe_desc,
            price,
            clothe_cate,
            size,
            image
    
          }
  

          axios.post('http://localhost:8070/product/addProduct',newProduct)
             .then(() =>{
              swal({
                title: "Success",
                text: "Successfully Inserted the Product!",
                icon: "success",
                button: "OK"
              });
              history.push("/productList");
       
             }).catch((err)=>{
              alert(err)
            })
        }
          
          
        return (
          <>
          <div>
      <Sidenav/>
    </div>
          
         
              <div class="container">
                <div class="title">Insert Product</div>
                <div class="content">
                  <form onSubmit={sendData} >
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">Clothe ID</span>
                        <input type="text" placeholder="P01" name='clothe_id' pattern = "[P][0-9]{2}" required onChange={(e)=>{
            
                      setClothe_Id(e.target.value);
                    }}/>
                      </div>

                      <div class="input-box">
                        <span class="details">Clothe Name</span>
                        <input type="text" placeholder="Enter Clothe Name" name='clothe_name' required onChange={(e)=>{
            
            setClothe_Name(e.target.value);
          }}/>
                      </div>
                      
                       <div class="input-box">
                        <span class="details">Clothe Description </span>
                        <input type="text" placeholder="Enter Clothe Description" name='clothe_desc' required onChange={(e)=>{
            
            setClothe_Desc(e.target.value);
          }}/>
                      </div>

                      <div class="input-box">
                        <span class="details">Clothe Price</span>
                        <input type="number" placeholder="1000.00" name='price' required onChange={(e)=>{
            
            setPrice(e.target.value);
          }}/>
                      </div>

                      <div class="input-box">
                        <label for="category">Choose a Category:</label>
                        <select name="category" id="category" required onChange={(e)=>{
                              setClothe_Cate(e.target.value);
                            }}>
                            <option value="volvo">Select</option>
                        {categories.map((cate, index) => (
                            <option>{cate.cate_name}</option>
                            ))}
        
                        </select>
                        </div>

                      <div class="input-box">
                        <label for="size">Choose Size:</label>
                        <select name="size" id="size" required onChange={(e)=>{
                            setClothe_Size(e.target.value);
                          }}>

                            <option >Select</option>
                            <option >Small</option>
                            <option >Medium</option>
                            <option >Large</option>
                            <option >Extra Large</option>
      
                        </select>
                        </div>
                        

                        <div class="input-box">
                        <span class="details">Clothe Image </span>
                        <input type="text" placeholder="Image name (   .jpg or .png or .jpeg)" name='clothe_Image' required onChange={(e)=>{
            
            setClothe_Image(e.target.value);
          }}/>
                        </div>
                                
                    </div>
                    <div class="button">
                      <input type="submit" value="Submit Product"/>
                    </div>
                  </form>
                </div>
              </div>
           
            </>
    );

};
export default InsertProduct;
