import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {AiFillEdit,AiFillEye} from 'react-icons/ai'
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
import Sidenav from '../sidenav';

function AllOffer() {

    const [offer, setOffer] = useState([]);

    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {
        loadOffer();
    }, []);

    const loadOffer = async () => {
        const result = await axios.get('http://localhost:8070/offer/offer')
        setOffer(result.data.reverse());
    };


    function deleteOffer(id) {
        axios.delete(`http://localhost:8070/offer/delete/${id}`)
            .then(() => {
                swal({
                    title: "Success",
                    text: "Delete Offer Successfully!",
                    icon: "success",
                    button: "OK"
                });
                window.location.assign("/offer")
            }).catch((err) => {
                alert(err);
            });
    }


    return (
        <>
      <div>
  <Sidenav/>
</div>

        <div className="section">
        <h3 className="cateTopic"><u>Offer List</u></h3>
                <form >
                    <input className="form-control me-2 search1" type="text" placeholder="Search Offer" name="search" onChange={(e) => {
                        setsearchTerm(e.target.value);
                    }} />
                    <div className="btnadd">
             <Link to={'/add_offer'}>
             <button type="button" class="btn btn-success">Insert Product</button>
              </Link>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Export as
            </button>
            <div class="dropdown-menu">
              <Link to="/bill"><a class="dropdown-item" href="#">PDF</a></Link>
            </div>
          </div>
                </form >
            
            
            <div className="catetb">
                < table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Offer ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">For Whom</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {offer.filter(val => {
                            if (searchTerm === "") {
                                return val;
                            } else if (
                                val.offer_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.pro_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.for_whom.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }
                        })
                            .map((val, key) => (
                                <tr>
                                    <td><div className="card-body"><div className="image">
                                        <img src={`./images/${val.offer_image}`} width="150px" height="50px" /></div></div></td>
                                    <td>{val.offer_id}</td>
                                    <td>{val.pro_name}</td>
                                    <td>{val.description}</td>
                                    <td>{val.for_whom}</td>
                                    <td>
                                    <Link class="btn btn-info"  to={`/get_offer/${val._id}` }>
                                      <AiFillEye size="20px" color="white"/>
                                 </Link>

                                    <Link className="btn btn-success space" to={`/update_offer/${val._id}`}>
                                     <AiFillEdit size="20px" color="white"/></Link>

                                        <Link className="btn btn-danger " onClick={() => deleteOffer(val._id)}>
                                            <FaTrashAlt size="20px" color="white" /></Link>
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
export default AllOffer;