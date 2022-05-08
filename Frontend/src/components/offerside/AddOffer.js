import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import { FaChevronCircleDown } from 'react-icons/fa';
import Sidenav from '../sidenav';

export default function AddOffer() {

  let history = useHistory();

  const [offer_id, setOfferID] = useState("");
  const [pro_name, setProName] = useState("");
  const [description, setDescription] = useState("");
  const [for_whom, setForWhom] = useState("");
  const [offer_image, setOfferImage] = useState("");


  function sendData(e) {
    e.preventDefault();

    const newOffer = {
      offer_id,
      pro_name,
      description,
      for_whom,
      offer_image
    }


    axios.post("http://localhost:8070/offer/add_Offer", newOffer).then(() => {
      swal({
        title: "Success",
        text: "Offer Added Successfully!",
        icon: "success",
        button: "OK"
      });
      history.push("/offer");
    }).catch((err) => {
      alert(err)
    })
  }


  return (
        <>
        <div>
    <Sidenav/>
    </div>
    <div class="container">
                <div class="title">Insert Offer</div>
                <div class="content">
      <form onSubmit={sendData}>
      <div class="user-details">

      <div class="input-box">
           <span class="details">Offer ID </span>
          <input type="text" className="form-control" id="offer_id" placeholder="Insert Offer ID" required onChange={(e) => {
            setOfferID(e.target.value);
          }} />
        </div>


        <div class="input-box">
           <span class="details">Product Name </span>
          <input type="text" className="form-control" id="pro_name" placeholder="Enter Product Name" required onChange={(e) => {
            setProName(e.target.value);
          }} />
        </div>


        <div class="input-box">
           <span class="details">Description</span>
          <input type="text" className="form-control" id="description" placeholder="Enter Description" required onChange={(e) => {
            setDescription(e.target.value);
          }} />
        </div>

        <div class="input-box">
           <span class="details">For Whom </span>
          <select class="form-control" aria-label="Default select example" style={{ fontSize: "15px" }}
            onChange={(e) => {
              setForWhom(e.target.value);
            }
            }>
            <option selected>Select For Whom</option>
            <option value="New User">New User</option>
            <option value="Current User">Current User</option>
            <option value="All User">All User</option>
          </select>
        </div>

        <div class="input-box">
                        <span class="details">Offer Image </span>
          <input type="text" className="form-control" id="offer_image" placeholder="Enter Image" required onChange={(e) => {
            setOfferImage(e.target.value);
          }} />
        </div>
        </div>

        <div class="button">
                      <input type="submit" value="Submit Offer"/>
                 
                 </div>  
      </form>
      </div>
     
    </div>
</>
  )

}