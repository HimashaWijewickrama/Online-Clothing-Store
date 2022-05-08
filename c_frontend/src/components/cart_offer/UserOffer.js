import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom";

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


    return (
        <div className="section">
            <h3 className="cateTopic">Offer List</h3>
            <div>
                <form >
                    <input className="form-control me-2 search1" type="text" placeholder="Search Offer" name="search" onChange={(e) => {
                        setsearchTerm(e.target.value);
                    }} />
                </form >
            </div>

            <div className="rew">
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
                        < div class="card7" >
                            <div className="card-body"><div className="image">
                                <img src={`./images/${val.offer_image}`} width="310px" height="160px" /></div></div>
                            <h6>{val.offer_id}</h6>
                            <h6>{val.pro_name}</h6>
                            <h6>{val.description}</h6>
                            <h6>{val.for_whom}</h6><br></br>
                            <a href={`/get_offer/${val._id}`} className="btn btn-view">View</a>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default AllOffer;