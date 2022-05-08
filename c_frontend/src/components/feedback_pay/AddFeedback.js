import React, { useState } from 'react';
import "./css/AddFeedback.css";
import axios from "axios";
import Swal from 'sweetalert2';

export default function AddFeedback() {
    const [feedid, setFeedid] = useState("");
    const [cusname, setCusname] = useState("");
    
    const [subject, setSubject] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    function sendData(e) {
        e.preventDefault();
    }
    const newFeedback = {
        feedid,
        cusname,
        
        subject,
        comment,
        rating
    }
    axios.post("http://localhost:8000/feedback/adds", newFeedback).then(() => {
        Swal.fire(
      
            'Thank You For Your Feedback.',
            'success'
        )
    }).catch((err) => {
        // alert(err);
        Swal.fire(
            'Oops...',
            'Something went wrong!',
            'error'
        )
    })








    return (
        <div className="cusfeedback">
        
                        
                        <form className="container-form" onSubmit={sendData}>
                            <span class="title-feedname">Feel Free To Drop Your Feedback Below!</span>
                            <div className="row mb-4">
                                <div className='col'>
                                    <div className='form-outline'>
                                        <label for="validationServer01" class="form-label-1" >Feedback ID</label>
                                        <input type="text" id="form-input" name="feedid" className='form-control' 
                                        onChange={(e) => {
                                            setFeedid(e.target.value);  }} required/>
    
                                    </div>
                                </div>
                               
                            </div>
                            <div className="row mb-4">
                                <div className='col'>
                                    <div className='form-outline'>
                                        <label for="form-label" class="form-label-1" >What is your name?</label>
                                        <input type="text" id="form-input" pattern="[a-zA-Z0-9\s]+" title="Your name should be a real!" name="cusname" className='form-control' 
                                        onChange={(e) => {
                                            setCusname(e.target.value);  }} required/>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="row mb-4">
                                <div className='col'>

                                    <div className="form-outline">
                                        <div className='form-outline'>
                                            <label for="form-label" class="form-label-3" >Subject</label>
                                            {/* <input type="text" id="form-input" className='form-control'/> */}
                                            <select className='select' type="text" id="form-input-1" name="subject" onChange={(e) => {
                                            setSubject(e.target.value);  }} required >
                                                <option value="1" id="form-input-1" selected>Choose...</option>
                                                <option value="2" id="form-input-1">Complain</option>
                                                <option value="3" id="form-input-1">Suggestion</option>
                                                <option value="4" id="form-input-1">Other</option>
                                            </select>
                                        </div>

                                    </div></div>

                            </div>

                            <div className="row mb-4">
                                <div className='col'>

                                    <div className="form-outline">
                                        <div className='form-outline'>
                                            <label for="form-label" class="form-label-4" >What could we improve?</label>
                                            <textarea rows="5" id="form-input" title="Drop your message here" className='form-control' name="comment"
                                            onChange={(e) => {
                                                setComment(e.target.value);  }} required></textarea>
                                        </div>

                                    </div></div>

                            </div>

                            <div class="rate-us">

                                <h3>Click the stars to rate us *</h3>

                                <div class="rating">
                                    <input type="radio" name="rating" value="5" id="5" onChange={(e) => {
                                            setRating(e.target.value);  }} required/>
                                    <label for="5" className="rate-star">☆</label> <input type="radio" name="rating" value="4" id="4" onChange={(e) => {
                                            setRating(e.target.value);  }} required/>
                                    <label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"  onChange={(e) => {
                                            setRating(e.target.value);  }} required/>
                                    <label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" onChange={(e) => {
                                            setRating(e.target.value);  }} required/>
                                    <label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" onChange={(e) => {
                                            setRating(e.target.value);  }} required/>
                                    <label for="1">☆</label>
                                </div>


                                <div class="buttons px-4 mt-0">

                                    <button class="btn-submit" type="submit">Submit</button>

                                </div>


                            </div>




                        </form>

                    

        </div>


    );
}

