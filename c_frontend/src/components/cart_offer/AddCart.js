import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useHistory } from 'react-router';

export default function AddCart(props) {

  let id = props.match.params.id;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8070/product/get/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])



  //Insert Part
  const clothe_name = data.clothe_name;
  const clothe_desc = data.clothe_desc;
  const price = data.price;
  const [product_size, setproductsize] = useState("");
  const [quantity, setquantity] = useState("");
  const image = data.image;



  function AddCart(e) {
    e.preventDefault();

    const addCartRes = {
      clothe_name, clothe_desc, price, product_size, quantity, image
    }

    console.log(addCartRes);
    axios.post("http://localhost:8070/cart/add_cart/", addCartRes).then(() => {
      swal({
        title: "Success",
        text: "Cart Added Successfully!",
        icon: "success",
        button: "OK"
      });
      window.location.assign("/cart")

    }).catch((err) => {
      alert(err);
    });
  }


  return (

    <div className="container">
      <div className="raw">
        <div class="card11" >
          <div className="card-body">
            <div className="image">
              <img src={`../prodImage/` + data.image} width="300px" height="300px" />
            </div>
          </div>
        </div>

        <div class="card2" >
          <div className="card-body">
            <div className="add_itm">
              <div className="col-lg-6 text-light">
                <div className="col">
                  <form onSubmit={AddCart}>
                    <div className="form-group">
                      <input type="text" name="clothe_name" value={data.clothe_name} id="clothe_name" className="form-control0" readOnly />
                    </div>

                    <div className="form-group">
                      <input type="text" name="price" id="price" value={data.price} className="form-control0" readOnly />
                    </div>

                    <div className="form-group">
                      <input type="text" name="clothe_desc" id="clothe_desc" value={data.clothe_desc} className="form-control0" style={{ fontSize: "12px", width: "400px" }} readOnly />
                    </div>


                    <div className="form-group">
                      <select class="form-select" aria-label="Default select example" name="product_size" id="product_size" className="form-control0"
                        onChange={(e) => {
                          setproductsize(e.target.value);
                        }
                        }>
                        <option selected>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input type="text" name="quantity" id="quantity" className="form-control0"
                        onChange={
                          (e) => {
                            setquantity(e.target.value);
                          }
                        } />
                    </div>
                    <button type="submit" className="btn btn-warning bt">Add To Cart</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}