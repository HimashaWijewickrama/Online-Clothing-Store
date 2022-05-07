import React, {useState, useEffect} from 'react';
import {useHistory, useParams}  from "react-router-dom";
import swal from 'sweetalert';
import '../css/Forms.css';
import axios from "axios";


 const UpdateProduct= ()=>{
    
    let history = useHistory();
    const {id} = useParams();

    const[categories, setCategories] = useState([]);

    useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8070/category/");
        setCategories(result.data.reverse());
      };

      const [products,setProducts]= useState({
        clothe_id: "",
        clothe_name: "",
        clothe_desc: "",
        price: "",
        clothe_cate: "",
        size: "",
        image:""
      });

      const{clothe_id,clothe_name,clothe_desc,price,clothe_cate,size,image} = products;

      const onInputChange = e =>{
        setProducts({...products, [e.target.name]:e.target.value});
      };
  
      useEffect(() =>{
        loadUser();
      }, []);

      const onSubmit = async e =>{
        e.preventDefault();
  
        await axios.put(`http://localhost:8070/product/update/${id}`,products)
        swal({
          title: "Success",
          text: "Product Updated Successfully!",
          icon: "success",
          button: "OK"
        });
        history.push('/productList');
  
      };
  
      const loadUser = async () =>{
  
        const result = await axios.get(`http://localhost:8070/product/get/${id}`);
        setProducts(result.data);
     
      };
    

        
        return (
          
         
              <div class="container">
                <div class="title">Insert Product</div>
                <div class="content">
                  <form onSubmit={e => onSubmit(e)} >
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">Clothe ID</span>
                        <input type="text" placeholder="P01" name='clothe_id'  value ={clothe_id}  onChange={(e)=>onInputChange(e)}  />
                      </div>

                      <div class="input-box">
                        <span class="details">Clothe Name</span>
                        <input type="text" placeholder="Enter Clothe Name" name='clothe_name'  value ={clothe_name}  onChange={(e)=>onInputChange(e)}  required/>
                      </div>
                      
                       <div class="input-box">
                        <span class="details">Clothe Description </span>
                        <input type="text" placeholder="Enter Clothe Description" name='clothe_desc'  value ={clothe_desc}  onChange={(e)=>onInputChange(e)}  required/>
                      </div>

                      <div class="input-box">
                        <span class="details">Clothe Price</span>
                        <input type="number" placeholder="1000.00" name='price'  value ={price}  onChange={(e)=>onInputChange(e)}  required />
                      </div>

                      <div class="input-box">
                        <label for="category">Choose a Category:</label>
                        <select name="category" id="category"  value ={clothe_cate}  onChange={(e)=>onInputChange(e)} >
                        <option >Select</option>                          
                        {categories.map((cate, index) => (
                            <option>{cate.cate_name}</option>
                            ))}
        
                        </select>
                        </div>

                      <div class="input-box">
                        <label for="size">Choose Size:</label>
                        <select name="size" id="size"  value ={size}  onChange={(e)=>onInputChange(e)} >

                            <option >Select</option>
                            <option >Small</option>
                            <option >Medium</option>
                            <option >Large</option>
                            <option >Extra Large</option>
      
                        </select>
                        </div><br/>
                        

                        <div class="input-box">
                        <span class="details">Clothe Image </span>
                        <input type="text" placeholder="Image name (   .jpg or .png or .jpeg)" name='clothe_img'   value ={image}  onChange={(e)=>onInputChange(e)} required />
                        </div>
                                
                    </div>
                    <div class="button">
                      <input type="submit" value="Update Product"/>
                    </div>
                    
                  </form>
                </div>
              </div>
           
            
    );

};
export default UpdateProduct;
