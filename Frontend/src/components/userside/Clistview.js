import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen from './ReportGen';
import { Link } from "react-router-dom";
import Sidenav from '../sidenav';

export default function RegList(){

    const[customer,setCustomer] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/customer/view").then((res)=>{
            setCustomer(res.data);
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
                <div class="container">
                <center><h1>All Curently Registered Customer List In Our System </h1></center><br /><br />
                <center><p>Click the button below to get all the details about all customers in our system. </p></center><br />
                <center><button className="btn20 btn-info"  onClick={()=>{ReportGen(customer)}}>Generate PDF</button></center><br /><br />

                    
                <center><Link to="/customerlist"><button type="submit" className="btn21 btn-primary">Back to Table</button></Link></center>
                    <br/><br/>
                </div>
        </div>
        </>
    )

}