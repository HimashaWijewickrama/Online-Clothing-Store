import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import Sidenav from '../sidenav';

function UpdateOffer() {

    let history = useHistory();
    const { id } = useParams();
    const [val, setVal] = useState({
        offer_image: "",
        offer_id: "",
        pro_name: "",
        description: "",
        for_whom: ""
    });

    const { offer_image, offer_id, pro_name, description, for_whom } = val;
    const onInputChange = e => {
        setVal({ ...val, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        loadVal();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();

        await axios.put(`http://localhost:8070/offer/update_offer/${id}`, val)
        swal({
            title: "Success",
            text: "Offer Update Successfully!",
            icon: "success",
            button: "OK"
        });
        window.location.assign("/offer")
        //history.push('/cart');
    };


    const loadVal = async () => {
        const result = await axios.get(`http://localhost:8070/offer/get_offer/${id}`);
        setVal(result.data);
    };



    return (
        <>
        <div>
    <Sidenav/>
  </div>
        <div>
        <div class="container">
                <div class="title">Update Offer</div>
                <div class="content">
                <form onSubmit={e => onSubmit(e)}>
                <div class="user-details">

                <div class="input-box">
           <span class="details">Offer ID </span>
                        <input type="text" className="form-control" id="offer_id" name="offer_id" value={offer_id} onChange={(e) => onInputChange(e)} readonly required />
                    </div>


                    <div class="input-box">
           <span class="details">Product Name </span>
                        <input type="text" className="form-control" id="pro_name" name="pro_name" value={pro_name} placeholder="Enter Product Name" onChange={(e) => onInputChange(e)} required />
                    </div>


                    <div class="input-box">
           <span class="details">Description </span>
                        <input type="text" className="form-control" id="description" name="description" value={description} placeholder="Enter Description" onChange={(e) => onInputChange(e)} required />
                    </div>

                    <div class="input-box">
           <span class="details">For Whom </span>
                        <select class="form-control" aria-label="Default select example" style={{ fontSize: "15px" }} name="for_whom" value={for_whom} id="for_whom"
                            onChange={(e) => onInputChange(e)} required>
                            <option selected>Select For Whom</option>
                            <option value="New User">New User</option>
                            <option value="Current User">Current User</option>
                            <option value="All User">All User</option>
                        </select>
                    </div>

                    <div class="input-box">
           <span class="details">Offer Image </span>
                        <input type="text" className="form-control" id="offer_image" name="offer_image" value={offer_image} placeholder="Enter image" onChange={(e) => onInputChange(e)} required />
                    </div>
                  </div>
                    <div class="button">
                      <input type="submit" value="Update Offer"/>
                 
                 </div>  
                </form>
            </div>
        </div>
        </div>
        </>
    );
}

export default UpdateOffer;