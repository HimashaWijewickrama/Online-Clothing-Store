import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGenerator from './ReportGenerator';
import { Link } from "react-router-dom";
import Sidenav from '../sidenav';

export default function OfferListView(){

    const[offer,setOffer] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/offer/offer").then((res)=>{
            setOffer(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>
        <div>
    <Sidenav/>
  </div>
        <div>
            <div>
                <div class="container">
                <center><h1>Latest Updates</h1></center><br /><br />
                <center><p>Click the button below to get all the details about all the offers. </p></center><br />
                <center><button className="btn01 btn-primary"  onClick={()=>{ReportGenerator(offer)}}>Generate PDF</button></center><br /><br />
            
                </div>
            </div>
        </div>
        </>
    )

}