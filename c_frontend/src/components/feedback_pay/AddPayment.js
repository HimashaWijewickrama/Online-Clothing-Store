import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/AddPayment.css'
import axios from "axios";
import Swal from 'sweetalert2';


export default function AddPayment() {

  const [cusid, setCusid] = useState("");
  const [payid, setPayid] = useState("");
  const [paymethod, setPaymethod] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cardholdername, setCardholdername] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [totamount, setTotamount] = useState("");


  function sendData(e) {
    e.preventDefault();

    const newPayment = {
      cusid,
      payid,
      paymethod,
      cardnumber,
      cardholdername,
      expiry,
      cvc,
      totamount
    }
    //create route to display add payment form
    axios.post("http://localhost:8000/payment/add", newPayment).then(() => {
      //display sweetalert when the payment happens successfully 
      Swal.fire(
        'Your Payment Was Successful!',
        'Thank You For Your Payment.',
        'success'
      )

    }).catch((err) => {
      // alert(err);
      //display sweetalert when the payment unsuccessfull 
      Swal.fire(
        'Oops...',
        'Something went wrong!',
        'error'
      )
    })


  }


  return (

    // start of add payment container
    <div className="add-container">
      <div className="container bg-light d-md-flex align-items-center">
        {/* start of first card box container */}
        <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
          {/* overlayer for card1 box */}
          <div className="card box1 overlay">
            <div className="fw-bolder mb-4">
              {/* internal card for display text */}
              <div className="internal-card">
                {/* text view of first card box */}
                <span className="ps-1" id="box1-text1">Complete <br />
                  Your Order <br />
                  By Filling<br />
                  Payment Details Here!</span>

                <div className="border-bottom mb-4"></div>

              </div>
            </div>
          </div>
          {/* end of the first card box container */}
        </div>

        {/* start of the second card box container */}
        <div className="card box2 shadow-sm">
          <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
            <span className="h5 fw-bold m-0" id="form-title">Fill your payment details to confirm order !</span></div>

          {/* start of the payment form */}
          <form className="needs-validation" onSubmit={sendData}>
            <div className="row">

              <div className="col-md-6">
                <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                  <span id="input-label">Customer<span className="ps-1">ID</span></span>
                  <div className="inputWithIcon">
                    <input type="text" className="form-control" name="cusid" pattern="[A-Za-z0-9]+" onChange={(e) => {
                      setCusid(e.target.value);
                    }} required /> <span className="fa-solid fa-user-tag">
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div classNameName="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                  <span id="input-label">Payment ID</span>
                  <div className="inputWithIcon">
                    <input type="text" className="form-control" name="payid" pattern="[A-Za-z0-9]+" onChange={(e) => {
                      setPayid(e.target.value);
                    }} required /> <span className="fa-solid fa-money-bill-1-wave">
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span id="input-label" classNameName="textfield2">Select Payment Method</span>
                  <div className="inputWithIcon1">
                    <input className="form-check-input" type="radio" name="rb" id="flexRadiobtn1" value="credit" onChange={(e) => {
                      setPaymethod(e.target.value);
                    }} required /><span className="form-check-label1">Credit Card</span>
                    <input className="form-check-input" type="radio" name="rb" value="debit" id="flexRadiobtn2" onChange={(e) => {
                      setPaymethod(e.target.value);
                    }} required /><span className="form-check-label2">Debit Card</span>
                  </div>
                </div>

                <div className="d-flex flex-column px-md-5 px-4 mb-4"> <span id="input-label">Card Number</span>
                  <div className="inputWithIcon">
                    <input className="form-control" type="text" name="cardnumber" pattern="[0-9]{16}" title="Card number should consist with 16 digits!" placeholder="5136 1845 5468 3894" onChange={(e) => {
                      setCardnumber(e.target.value);
                    }} required /> <span className="">
                      <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" /></span>

                  </div>

                </div>
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span id="input-label">Card Holder Name</span>
                  <div className="inputWithIcon">
                    <input className="form-control text-uppercase" type="text" name="cardholdername" pattern="[a-zA-Z0-9\s]+" title="Cardholder name shouldn't consist any characters!" placeholder="Jane Austen" onChange={(e) => {
                      setCardholdername(e.target.value);
                    }} required />
                    <span className="fa-solid fa-user-large"></span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span id="input-label">Expiration<span className="ps-1">Date</span></span>
                  <div className="inputWithIcon">
                    <input type="month" className="form-control" name="expiry" placeholder="MM/YY" onChange={(e) => {
                      setExpiry(e.target.value);
                    }} required />

                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                  <span id="input-label">Code CVV</span>
                  <div className="inputWithIcon">
                    <input type="number" className="form-control" name="cvc" max="999" pattern="^[0-9]{3, 4}$" title="CVC number should be a number less than 999" placeholder="123" onChange={(e) => {
                      setCvc(e.target.value);
                    }} required />
                    <span classNameName="validity"></span>
                    <span className="fas fa-lock"></span><span classNameName="validity"></span>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4"> <span id="input-label">Total Payment Amount (Rs.)</span>
                  <div className="inputWithIcon">
                    <input className="form-control" type="number" name="totamount" onChange={(e) => {
                      setTotamount(e.target.value);
                    }} required />
                  </div>
                </div>
              </div>

              {/* submit button for payment  */}

              <div className="col-12 px-md-5 px-4 mt-3">
                <button type="submit" id="btn-pay" classNameName="btn btn-success">Pay Now
                </button>
              </div></div>
            {/* end of the payment form */}
          </form>
          {/* end of the second card view */}
        </div>
      </div>
      {/* end of add payment container */}
    </div>
  );
}
