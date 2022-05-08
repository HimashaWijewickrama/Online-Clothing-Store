import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Link } from "react-router-dom";


export default function AllCart() {

    const [carRes, setCarRes] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8070/cart')
            .then((res) => {
                setCarRes(res.data);
                console.log(res.data);
                console.log(res.data.product_price)
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);


    function deleteCart(id) {
        axios.delete(`http://localhost:8070/cart/delete/${id}`)
            .then(() => {
                swal({
                    title: "Success",
                    text: "Delete Item Successfully!",
                    icon: "success",
                    button: "OK"
                });
                window.location.assign("/cart")

            }).catch((err) => {
                alert(err);
            });
    }
    var count = 0;

    return (
        <div className="raw">
            <div className="col-lg-7">

                {carRes.map((val, res) => {
                    return (
                        <div className="raw">
                            <div class="card3" >
                                <div className="card-body">
                                    <img src={`./prodImage/` + val.image} width="300px" height="300px" />
                                </div>
                            </div>

                            <div class="card4" >
                                <div className="card-body">
                                    <div className="add_itm">
                                        <div className="col-lg-6 text-light">
                                            <div className="col">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" name="clothe_name" value={val.clothe_name} id="product_name" className="form-control0" readOnly />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="price" id="product_price" value={val.price * val.quantity} className="form-control0" readOnly />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="product_size" id="product_size" value={val.product_size} className="form-control0" readOnly />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="quantity" id="quantity" value={val.quantity} className="form-control0" readOnly />
                                                    </div>
                                                    <div className="raw">
                                                        <a href={`/update/${val._id}`} className="btn btn-success">Update</a>
                                                        <input type="button" name="delete" value="Delete" className="btn btn-danger" onClick={() => deleteCart(val._id)} />

                                                    </div>
                                                </form>
                                            </div></div></div></div></div>
                        </div>
                    )
                })
                }

            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-20">
                <div className='se'>
                    {
                        carRes.map((val, res) => {
                            return (
                                <p>Item Calc:  {count = count + (val.price * val.quantity)}</p>
                            )
                        })
                    }
                </div><br></br>
                <div className="res">
                    <p>Total = Rs: {count}</p></div>
                <Link to="#"><button className="btn btn-success">Process To Checkout</button></Link>
            </div>
        </div>
    )

}