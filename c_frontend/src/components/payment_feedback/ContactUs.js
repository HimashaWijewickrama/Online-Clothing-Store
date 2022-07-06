import React from "react";
import emailjs from "emailjs-com"
import "./contactus.css";
import Swal from "sweetalert2";

const Mailer = () => {

    //create function to send mail
    function sendEmail(e) {
        e.preventDefault();

//specify emailjs credientials

// service_id,template_id
        emailjs.sendForm('service_pumei2e', 'template_cl1h0rq', e.target,
            'kfmPJ0fMXD_rsjn-s').then(res => {
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
        <div className="contact-container">

        <div className="cuscontact">
            {/* <div className="navbar"> */}
               

{/* <div className="container border"> */}

                    <h1 style={{color:"#1D2951",paddingTop:"15px"}}>Let's Talk!</h1><br /> 
                    {/* <div class="container-form">
                        <hr style={{ color: 'white' }} /> */}
                        {/* start of the contact us form */}
                        {/* <form
                            className="row"
                            style={{ alignContent: "left", width: "100%", paddingRight:"9000px"}}
                            onSubmit={sendEmail}
                            
                            >

                            <div class="row mb-4">
                                <label for="Firstname" class="form-label" >First Name</label>
                                <div class="inputWithIcon">
                                    <input type="text" class="form-control" id="form-input" name="fname" required />
                                    <span class="fa-solid fa-user-check" id="input-icon"></span>

                                </div>
                            </div>
                            <div class="row mb-4">
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

                            {/* <button type="submit" value="Send" id="button" className="btn-success">Send
                                <i class="fa-solid fa-paper-plane" id="btn-icon"></i>

                            </button>

                        </form> */}
                    {/* </div>  */}
                {/* </div> */}
                {/* </div> */}


            {/* <div className="content" style={{textSize:"20px"}}>
                <small >Do you like to know about latest fashions news?</small>
              

            </div><br/> */}
           
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


{/* <div class="container-form"> */}
                        {/* <hr style={{ color: 'white' }} />  */}
                        {/* start of the contact us form */}
                        {/* <form
                            className="row"
                            style={{ alignContent: "left", width: "100%", paddingRight:"90px"}}
                            onSubmit={sendEmail}
                            
                            >

                            <div class="row mb-4">
                                <label for="Firstname" class="form-label" >First Name</label>
                                <div class="inputWithIcon">
                                    <input type="text" class="form-control" id="form-input" name="fname" required />
                                    <span class="fa-solid fa-user-check" id="input-icon"></span>

                                </div>
                            </div>
                            <div class="row mb-4">
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
                            </div> */}
                            {/* submit button */}
{/* 
                             <button type="submit" value="Send" id="button" className="btn-success">Send
                                <i class="fa-solid fa-paper-plane" id="btn-icon"></i>

                            </button>

                        </form>  */}
                        
</div>

<br />  


                        <hr style={{ color: 'white' }} />  
                        {/* start of the contact us form */}
                         <form
                            className="row"
                            style={{ alignContent: "left", width: "50%", paddingLeft:"50px"}}
                            onSubmit={sendEmail}
                            
                            > <div class="input-container">

                            <div class="row mb-4">
                                <label for="Firstname" class="form-label-0" >First Name</label>
                                
                                    <input type="text" title="Enter your first name" class="form-control-0" id="form-input" name="fname" required />
                            </div>

                            <div class="row mb-4">
                                <label for="Lastname" class="form-label-0" >Last Name</label>

                                    <input type="text" title="Enter your last name" class="form-control-0" id="form-input" name="lname" required />
                                 
                            </div>
                            <div class="row mb-4">
                                <label for="Email" class="form-label-0" >Email Address</label>
                            

                                    <input type="text" title="Enter your email address" class="form-control-0" id="form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" required />
                                   

                              
                            </div>
                            <div class="row mb-4">
                                <label for="Subject" class="form-label-0" >How can we help you?</label>
                               

                                    <input type="text" class="form-control-0" id="form-input" name="subject" required />
                                    


                           
                            </div>
                            <div class="row mb-4">
                                <label for="Msg" class="form-label-0" >*Further details</label><br/>
                              
                                    <textarea type="text"  rows="5" class="form-control-0" id="form-input" name="msg" required></textarea>

                            </div> 
                             <button type="submit" value="Send" id="button" className="btn-success">Send
                              

                            </button> </div>
                            {/* submit button */}

                            

                        </form>  

{/* <div className="contact-contain">



</div>        */}
 </div>


    );
};

export default Mailer;
