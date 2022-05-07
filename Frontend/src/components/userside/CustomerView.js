import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';


function CustomerView(){
	const[customer, setCustomer] = useState({
		fname: "",
		lname: "",
		cemail: "",
		cpassword: ""
	
	})
	const {id} = useParams();
	useEffect(() =>{
		loadUser();
	}, []);
	const loadUser = async() =>{
		const res = await axios.get(`http://localhost:8070/customer/getone/${id}`);
		setCustomer(res.data);
	}
    return(
        <div>
        <div className="fun">
        <span>User Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Customer Details </h2><br/>
     <table class="table">
	 <tr>
		<td><h3>Customer First Name:</h3></td>
		<td><h3>{customer.fname}</h3></td>
	</tr>
	<tr>
		<td><h3>Customer Last Name:</h3></td>
		<td><h3>{customer.lname}</h3></td>
	</tr>
	<tr>
		<td><h3> Customer Email:</h3></td>
		<td><h3>{customer.cemail}</h3></td>
	</tr>
	<tr>
		<td><h3> Customer Password:</h3></td>
		<td><h3>{customer.cpassword}</h3></td>
	</tr>
	
	<tr>
	   <td>
           <br/>
			    <br/>
				<Link> 
				<button type="submit" class="edit"><h5><b>Back to Page</b></h5></button>
				</Link>
       </td> 
	</tr>		 		 	
	</table>
	
 </div>
</div>
    );
}
export default CustomerView;