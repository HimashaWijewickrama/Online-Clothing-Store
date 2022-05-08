import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Sidenav from '../sidenav';

// import AdminDelPayment from './alerts/AdminDelPayment';
import Swal from 'sweetalert2';

const AllPayments = (props) => {
  const [payments, setPayments] = useState([]);

  // search function
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    loadUsers();
  }, []);
  //on page load display all records
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/payment/all");
    setPayments(result.data.reverse());
  };

  function deletePayment(id) {
    axios.delete(`http://localhost:8070/payment/delete/${id}`).then(() => {
      /*alert("Delete Successful");*/
      
      
    // window.location.reload();
  

  }).catch((err) => {
    console.log(err);
  })

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    // showCancelButton: true,
    confirmButtonColor: '#3085d6',
    // cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })


  }

  //define useEffect method for filter data for search function
  useEffect(() => {

    if (searchInput === '') {
      setResults(payments)
    } else {
      let results = payments.filter(
        (payment) =>
          payment.cusid.toLowerCase().includes(searchInput) ||
          payment.payid.toLowerCase().includes(searchInput) ||
          payment.paymethod.toLowerCase().includes(searchInput) ||
          payment.cardholdername.toLowerCase().includes(searchInput)



      )
      setResults(results)
    }
  }, [searchInput, payments])

  //start of the return   

  return (
    <>
       <div>
      <Sidenav/>
       </div> 
       <div className="section">
       <h3 className="cateTopic"><u>Product List</u></h3>
          
          <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Export as
            </button>
            <div class="dropdown-menu">
              <Link to="/reportPay"><a class="dropdown-item" href="#">PDF</a></Link>
            </div>
          </div>
   
      <form >
        <input className="form-control me-2 search" type="text" placeholder="Search Product" name="search" onChange={(e)=>{
             setSearchInput(e.target.value);
	}} />
      
      </form >

      <div className="catetb">
      <table className="table">
        {/* <table className='table-responsive border-primary' id="pay-table"> */}
        <thead className="thead-dark">
          <tr>
            <th scope="col" id="table-col">#</th>
            <th scope="col" id="table-col">Customer ID</th>
            <th scope="col" id="table-col">Pay ID</th>
            <th scope="col" id="table-col">Payment Method</th>
            <th scope="col" id="table-col">CardNumber</th>

            <th scope="col" id="table-col">Cardholder Name</th>
            <th scope="col" id="table-col">Expiry Date</th>
            <th scope="col" id="table-col">CVC</th>
            <th scope="col" id="table-col">Total Revenue (Rs.)</th>
            <th scope="col" id="table-col">Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {results.map((user, index) => (
            <tr key={index}>
              <th scope="raw1">{index+1}</th>
            
              <td>{user.cusid}</td>
              <td>{user.payid}</td>
              <td>{user.paymethod}</td>
              <td>{user.cardnumber}</td>

              <td>{user.cardholdername}</td>
              <td>{user.expiry}</td>
              {/* <td>{user.cvc}</td> */}
              <td>{user.cvc}</td>
              <td>{user.totamount}</td>
              <td>


                  <Link className='edit' to={`/updatePayment/${user._id}`}>
                <button type="submit" className="btn btn-primary" id="action-viewbtn" title="Update">Update</button>
                </Link>
                   
        
                  <Link className="delete" onClick={() => deletePayment(user._id)}>
                    <button type="submit" name="delete_btn" className="btn btn-danger" id="action-delbtn" title="Delete" data-target="#alert-wrapper">Delete</button>
                </Link>
                
                
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





export default AllPayments; 