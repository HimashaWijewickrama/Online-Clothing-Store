import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';

const AllFeedbacks = (props) => {
  //set feedbacks values
  const [feedbacks, setFeedbacks] = useState([]);

  // search function
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    loadUsers();
  }, []);

  //on page load display all records
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/feedback/alls");
    setFeedbacks(result.data.reverse());
  };
  //function for delete feedbacks using feedback id

  function deleteFeedback(id) {
    axios.delete(`http://localhost:8070/feedback/deletes/${id}`).then(() => {
      /*alert("Delete Successful");*/
    // window.location.reload();
  }).catch((err) => {
    console.log(err);
  })

  //alert to make sure selected record should be delete or not
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
      setResults(feedbacks)
    } else {
      let results = feedbacks.filter(
        (feedback) =>
        feedback.feedid.toLowerCase().includes(searchInput)||
          feedback.cusname.toLowerCase().includes(searchInput) ||
          feedback.subject.toLowerCase().includes(searchInput) ||
          feedback.comment.toLowerCase().includes(searchInput) 
      )
      setResults(results)
    }
  }, [searchInput, feedbacks])

  //start of the return   

  return (
    <div className="allfeedback-container">

      <br /><br />
      <span className="title-wrapper">
        <p className="table-title">All Customers' feedback Details</p> </span>



      {/*Search Function*/}

      {/*<input className='form-control' type='search' placeholder='Search inventory' name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>*/}
      <div class="input-group rounded" id="search-section">
        <input type="search" className="form-control rounded" id="searchbar-inside" placeholder="Search feedback details here.." aria-label="Search"
          aria-describedby="search-addon" name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search" id="search-icon"></i>
        </span>
      </div><br />


      {/*Table view for display all the data*/}
      <table className="table table-hover table-bordered border-primary table-responsive">
        {/* <table className='table-responsive border-primary' id="pay-table"> */}
        <thead>
          <tr>
         
            <th scope="col" id="table-col">Feedback ID</th>
            <th scope="col" id="table-col">Customer Name</th>
            <th scope="col" id="table-col">Subject</th>
            <th scope="col" id="table-col">comment</th>

            <th scope="col" id="table-col">Rating</th>
          <th scope='col' id="table-col">Action</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user, index) => (
            <tr key={index}>
              {/* <th scope="raw1">{index+1}</th> */}
            
              <td>{user.feedid}</td>
              <td>{user.cusname}</td>
              <td>{user.subject}</td>
              <td>{user.comment}</td>

              <td>{user.rating}</td>
          
              <td>


              
         
                <th scope="col" id="table-col-del">
                  <Link className="delete" onClick={() => deleteFeedback(user._id)}>



                    <button type="submit" name="delete_btn" className="btn btn-danger" id="action-delbtn" title="Delete" data-target="#alert-wrapper">Delete</button>
                </Link>
                </th>
                
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>


    </div>









  )

}





export default AllFeedbacks; 