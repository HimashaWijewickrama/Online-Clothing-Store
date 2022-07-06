import axios from 'axios';
import React,{useState,useEffect} from 'react';
import payRepoGen from './reportPay';
import { Link } from "react-router-dom";
import Sidenav from '../sidenav';


export default function ReportPay(){

    const[payment,setPayments] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/payment/all").then((res)=>{
            setPayments(res.data);
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
                <center><h1>Generate All Payment Details Report</h1></center><br /><br />
                <center><p>Click the button below to get all the details about all the customer's payments. </p></center><br />
                <button className="btn1 btn-primary" onClick={()=>{payRepoGen(payment)}}>Generate PDF</button>

                    
                <Link to="/all"><button type="submit" className=" btn2 btn-warning">Back to list</button></Link>
                    
                </div>
            </div>
        </div>
        </>
    )

}
