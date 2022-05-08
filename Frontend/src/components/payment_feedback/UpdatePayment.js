import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdatePayment() {


  let history = useHistory();
  const { id } = useParams();
  const [users, setUsers] = useState({
    cusid: "",
    payid: "",
    paymethod: "",
    cardnumber: "",
    cardholdername: "",
    expiry: "",
    cvc: "",
    totamount: ""


  });

  const {
    cusid,
    payid,
    paymethod,
    cardnumber,
    cardholdername,
    expiry,
    cvc,
    totamount
  } = users;
  const onInputChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`http://localhost:8070/payment/update/${id}`, users)
    history.push('/');
    // alert("Payment details was updated successfully!")

    Swal.fire({
      position: 'top-middle',
      icon: 'success',
      title: 'Payment has been saved!',
      showConfirmButton: false,
      timer: 3000
    })

  };


  const loadUser = async () => {

    const result = await axios.get(`http://localhost:8000/payment/get/${id}`);
    setUsers(result.data);

  };

  return (
    <div className="container-update">
      <div className="col d-flex justify-content-center">
        <div className="card1">
          <div className="col-md-8 mt-4 mx-auto">
            <h3 className="h3 mb-3 font-weight-normal" id="update-text">Update Payment Details</h3>
            <form className="needs-validation" onSubmit={e => onSubmit(e)}>

              <div class="row">
                {/* <div class="col-12"> */}

                <div class="col-md-6">
                  <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">

                    <span id="input-label">Customer<span class="ps-1">ID</span></span>
                    <div class="inputWithIcon">
                      <input type="text" class="form-control" name="cusid" value={cusid} pattern="[A-Za-z0-9]+" onChange={(e) => onInputChange(e)} readOnly
                        required /> <span class="fa-solid fa-user-tag">
                        {/* <span class="fas fa-lock"> */}
                      </span>


                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                    <span id="input-label">Payment ID</span>
                    <div class="inputWithIcon">
                      <input type="text" class="form-control" name="payid" value={payid} pattern="[A-Za-z0-9]+" onChange={(e) => onInputChange(e)}
                        required /> <span class="fa-solid fa-money-bill-1-wave">

                        {/* <span class="fas fa-lock"> */}
                      </span> </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex flex-column px-md-5 px-4 mb-4">
                    <span id="input-label" className="textfield2">Select Payment Method</span>
                    <div class="inputWithIcon1">
                      <input class="form-check-input" type="radio" name="rb" id="flexRadiobtn1" value={paymethod} onChange={(e) => onInputChange(e)}
                        required /><span className="form-check-label1">Credit Card</span>
                      {/* <label class="form-check-label1" for="flexRadioDefault1" id="paymentlabel">Credit Card</label> */}

                      <input class="form-check-input" type="radio" name="rb" value={paymethod} id="flexRadiobtn2" onChange={(e) => onInputChange(e)}
                        required /><span className="form-check-label2">Debit Card</span>

                    </div>
                  </div>

                  <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span id="input-label">Card Number</span>
                    <div class="inputWithIcon">
                      <input class="form-control" type="text" name="cardnumber" value={cardnumber} pattern="[0-9]{16}" title="Card number should consist with 16 digits!" placeholder="5136 1845 5468 3894" onChange={(e) => onInputChange(e)} readOnly
                        required /> <span class="">
                        <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" /></span>
                      {/* <span class="fa-solid fa-credit-card"></span> </div> */}
                    </div>
                  </div>
                  <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span id="input-label">Card Holder Name</span>
                    <div class="inputWithIcon">
                      <input class="form-control text-uppercase" type="text" name="cardholdername" value={cardholdername} pattern="[a-zA-Z0-9\s]+" title="Cardholder name shouldn't consist any characters!" placeholder="Jane Austen" oonChange={(e) => onInputChange(e)}
                       readOnly required />
                      <span class="fa-solid fa-user-large"></span> </div>

                  </div>

                </div>
                <div class="col-md-6">
                  <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span id="input-label">Expiration<span class="ps-1">Date</span></span>
                    <div class="inputWithIcon">



                      <input type="month" class="form-control" name="expiry" value={expiry} placeholder="MM/YY" onChange={(e) => onInputChange(e)} readOnly
                        required />
                      {/* <span class="fas fa-calendar-alt"></span>  */}
                    </div>
                  </div>
                </div>



                <div class="col-md-6">
                  <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                    <span id="input-label">Code CVV</span>
                    <div class="inputWithIcon">

                      <input type="number" class="form-control" name="cvc" value={cvc} max="999" pattern="^[0-9]{3, 4}$" title="CVC number should be a number less than 999" placeholder="123"
                        onChange={(e) => onInputChange(e)} readOnly
                        required />
                      {/* pattern="([0-9]|[0-9]|[0-9])" */}
                      <span className="validity"></span>
                      <span class="fas fa-lock"></span><span className="validity"></span>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span id="input-label">Total Payment Amount (Rs.)</span>
                    <div class="inputWithIcon">
                      <input class="form-control" type="number" name="totamount" value={totamount} onChange={(e) => onInputChange(e)} required />
                    </div>

                  </div>
                </div>

                {/* <div class="btn btn-primary w-100"> */}

                <button type="submit" className="btn btn-success">Update and Save
                </button></div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
}
export default UpdatePayment;