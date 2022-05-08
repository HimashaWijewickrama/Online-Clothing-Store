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
                <button className="btn1 btn-info"  onClick={()=>{ReportGen(customer)}}>Generate PDF</button><br /><br />

                <Link to="/customerlist"><button type="submit" className="btn2 btn-warning">Back to list</button></Link>
                </div>
        </div>
        </>
    )

}