import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import Sidenav from '../sidenav';

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
                    'Selected record has been deleted.',
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
                    
                    feedback.cusname.toLowerCase().includes(searchInput) ||
                    feedback.subject.toLowerCase().includes(searchInput) ||
                    feedback.comment.toLowerCase().includes(searchInput) 
            )
            setResults(results)
        }
    }, [searchInput, feedbacks])

    //start of the return   

    return (
        <>
            <div>
                <Sidenav />
            </div>
            <div className="section">
                <h3 className="cateTopic"><u>Customer's Feedbacks</u></h3>


                <form >
                    <input className="form-control me-2 search" type="text" placeholder="Search Feedbacks Here.." name="search" onChange={(e) => {
                        setSearchInput(e.target.value);
                    }} />
                </form>

                <form>
                    <div className='paytb'>


                        {/*Table view for display all the data*/}

                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    {/* <table className='table-responsive border-primary' id="pay-table"> */}


                                    
                                    <th>Customer Name</th>
                                    <th>Category</th>
                                    <th>Message</th>

                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                {results.map((user, index) => (
                                    <tr key={index}>
                                        {/* <th scope="raw1">{index+1}</th> */}

                                        
                                        <td>{user.cusname}</td>
                                        <td>{user.subject}</td>
                                        <td>{user.comment}</td>

                                        <td>{user.rating}</td>

                                        <td>
                                            <Link className="btn btn-danger" onClick={() => deleteFeedback(user._id)} title="Delete"><FaTrashAlt size="20px" color="white" />

                                            </Link>


                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </form>
            </div>
        </>







    )

}





export default AllFeedbacks; 
