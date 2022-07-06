import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../css/Forms.css';
import Sidenav from '../sidenav';

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
    history.push('/all');
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

    const result = await axios.get(`http://localhost:8070/payment/get/${id}`);
    setUsers(result.data);

  };

  return (
    <>

      <div>
        <Sidenav />
      </div>
      <div className="container">
        <div className="title">Update Payment</div>
        <div className='content'>
          <form className="needs-validation" onSubmit={e => onSubmit(e)}>

            <div className="user-details">
              {/* <div class="col-12"> */}

              <div class="input-box">


                <span className="details">Customer ID</span>

                <input type="text" class="form-control" name="cusid" value={cusid} pattern="[A-Za-z0-9]+" onChange={(e) => onInputChange(e)} readOnly
                  required />
                {/* <span class="fas fa-lock"> */}

              </div>
              <div class="input-box">
                <span className="details">Payment ID</span>
                <input type="text" class="form-control" name="payid" value={payid} pattern="[A-Za-z0-9]+" onChange={(e) => onInputChange(e)}
                  required />
                {/* <span class="fas fa-lock"> */}
              </div>

              <div class="input-box">
                <span className="details">Select Payment Method</span>
                <input type="radio" class="form-check-input" name="rb" id="flexRadiobtn1" value={paymethod} onChange={(e) => onInputChange(e)}
                  readOnly /><span className="form-check-label1">Credit Card</span>
                {/* <label class="form-check-label1" for="flexRadioDefault1" id="paymentlabel">Credit Card</label> */}
                <input class="form-check-input" type="radio" name="rb" value={paymethod} id="flexRadiobtn2" onChange={(e) => onInputChange(e)}
                  readOnly /><span className="form-check-label2">Debit Card</span>
              </div>
 
              <div class="input-box">
                <span className="details">Card Number</span>

                <input class="form-control" type="text" name="cardnumber" value={cardnumber} pattern="[0-9]{16}" title="Card number should consist with 16 digits!" placeholder="5136 1845 5468 3894" onChange={(e) => onInputChange(e)} readOnly
                  required /> 
                 
                {/* <span class="fa-solid fa-credit-card"></span> </div> */}
              </div>

              <div class="input-box">
                <span className="details">Card Holder Name</span>

                <input class="form-control text-uppercase" type="text" name="cardholdername" value={cardholdername} pattern="[a-zA-Z0-9\s]+" title="Cardholder name shouldn't consist any characters!" placeholder="Jane Austen" oonChange={(e) => onInputChange(e)}
                  readOnly required />


              </div>


              <div class="input-box">
                <span className="details">
                  Expiration<span class="ps-1">Date</span></span>



                <input type="month" class="form-control" name="expiry" value={expiry} placeholder="MM/YY" onChange={(e) => onInputChange(e)} readOnly
                  required />
                {/* <span class="fas fa-calendar-alt"></span>  */}

              </div>
              <div class="input-box">
                <span className="details">
                  CVV</span>


                <input type="number" class="form-control" name="cvc" value={cvc} max="999" pattern="^[0-9]{3, 4}$" title="CVC number should be a number less than 999" placeholder="123"
                  onChange={(e) => onInputChange(e)} readOnly
                  required />
                {/* pattern="([0-9]|[0-9]|[0-9])" */}

              </div>


              <div class="input-box">
                <span className="details">Total Payment Amount (Rs.)</span>

                <input class="form-control" type="number" name="totamount" value={totamount} onChange={(e) => onInputChange(e)} required />
              </div>


            </div>
            <div className='button'>

              {/* <div class="btn btn-primary w-100"> */}

              <button type="submit" className="btn btn-success">Update and Save
              </button></div>
          </form>

        </div>
      </div>

    </>
  );
};
export default UpdatePayment;
