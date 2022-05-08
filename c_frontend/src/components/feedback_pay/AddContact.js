import React from "react";
import emailjs from "emailjs-com"
import "./css/AddContact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from "sweetalert2";

const Mailer = () => {

    //create function to send mail
    function sendEmail(e) {
        e.preventDefault();

//specify emailjs credientials
        emailjs.sendForm("service_g5h6e9n", "template_1nqrgwa", e.target,
            "dNW6dDU53x72_92z_").then(res => {
//alert for successfull message
                    Swal.fire(
                        'Thank You!',
                        'Your message has been send!',
                        'success'
                      )
          
            }).catch(err =>
                //alert for error message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                   
                  }));
    }


    return (
        <div className="cuscontact">
            <div className="navbar">
                {/* start of the container */}
                <div className="container border"
                    style={{
                        marginTop: "50px",
                        width: '50%',
                        marginRight: "0px",
                        border: "2px solid white",
                        backgroundColor: "#0000",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                    <h2 style={{ marginTop: '25px', color: 'white' }}>Please leave your feedback below!</h2><br />
                    <div class="container-form" style={{ marginTop: "0px" }}>
                        <hr style={{ color: 'white' }} />
                        {/* start of the contact us form */}
                        <form
                            className="row"
                            style={{ margin: "20px 85px 0px 100px", alignContent: "left" }}
                            onSubmit={sendEmail}>

                            <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <label for="Firstname" class="form-label" >First Name</label>
                                <div class="inputWithIcon">
                                    <input type="text" class="form-control" id="form-input" name="fname" required />
                                    <span class="fa-solid fa-user-check" id="input-icon"></span>

                                </div>
                            </div>
                            <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <label for="Lastname" class="form-label" >Last Name</label>
                                <div class="inputWithIcon">

                                    <input type="text" class="form-control" id="form-input" name="lname" required />
                                    <span class="fa-solid fa-user-check" id="input-icon"></span>
                                </div>
                            </div>
                            <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <label for="Email" class="form-label" >Email Address</label>
                                <div class="inputWithIcon">

                                    <input type="text" class="form-control" id="form-input" name="email" required />
                                    <span class="fa-solid fa-envelope-circle-check" id="input-icon"></span>

                                </div>
                            </div>
                            <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <label for="Subject" class="form-label" >Subject</label>
                                <div class="inputWithIcon">

                                    <input type="text" class="form-control" id="form-input" name="subject" required />
                                    <span class="fas fa-edit" id="input-icon"></span>


                                </div>
                            </div>
                            <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                                <label for="Msg" class="form-label" >Message</label>
                                <div class="inputWithIcon">

                                    <textarea type="text" row="5" class="form-control" id="form-input" name="msg" required></textarea>

                                </div>
                            </div>
                            {/* submit button */}

                            <button type="submit" value="Send" id="button" className="btn-success">Send
                                <i class="fa-solid fa-paper-plane" id="btn-icon"></i>

                            </button>

                        </form>
                    </div>
                </div></div>


            <div className="content">
                <small>Do you like to know about latest fashoins news?</small>
                <h1>Let's<br />
                   talk!</h1>

            </div>
            {/* background bubble images */}
            <div className="bubbles">
                <img className="img1" />
                <img className="img1" />
                <img className="img1" />
                <img className="img1" />
                {/* <img className="img1"/>
                         <img className="img1"/>
                         <img className="img1"/> */}





            </div>





        </div>


    );
};

export default Mailer;