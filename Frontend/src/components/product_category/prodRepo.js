import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportProduct from './reportProd';
import { Link } from "react-router-dom";
import Sidenav from '../sidenav';


export default function ReportP(){

    const[products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/product/").then((res)=>{
            setProducts(res.data);
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
                <center><p>Click the button below to get all the details about all the Products. </p></center><br />
                <button className=" btn1 btn-primary" onClick={()=>{ReportProduct(products)}}>Generate PDF</button>

                    
                <Link to="/productList"><button type="submit" className=" btn2 btn-warning">Back to list</button></Link>
                    
                </div>
            </div>
        </div>
        </>
    )

}