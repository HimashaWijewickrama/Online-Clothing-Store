import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function UpdateCart() {


  let history = useHistory();
  const { id } = useParams();
  const [val, setVal] = useState({
    clothe_name: "",
    clothe_desc: "",
    price: "",
    product_size: "",
    quantity: ""
  });

  const { clothe_name, clothe_desc, price, product_size, quantity } = val;
  const onInputChange = e => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadVal();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`http://localhost:8070/cart/update_cart/${id}`, val)
    swal({

      title: "Success",

      text: "Cart Item Update Successfully!",

      icon: "success",

      button: "OK"

    });
    window.location.assign("/cart")
    //history.push('/cart');

  };

  const loadVal = async () => {

    const result = await axios.get(`http://localhost:8070/cart/get_cart/${id}`);
    setVal(result.data);
  };

  return (

    <div className="container">
      <div className="raw">
        <div class="card10" >
          <div className="card-body">
            <div className="image">
              <img src={`../prodImage/` + val.image} width="300px" height="300px" />
            </div>
          </div>
        </div>

        <div class="card2" >
          <div className="card-body">
            <div className="add_itm">
              <div className="col-lg-6 text-light">
                <div className="col" style={{ fontSize: '20px' }}>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                      <input type="text" name="clothe_name" value={clothe_name} id="clothe_name" className="form-control0" onChange={(e) => onInputChange(e)} readOnly required />
                    </div>

                    <div className="form-group">
                      <input type="text" name="price" id="price" value={price} className="form-control0" onChange={(e) => onInputChange(e)} readOnly required />
                    </div>

                    <div className="form-group">
                      <input type="text" name="clothe_desc" id="clothe_desc" value={clothe_desc} className="form-control0" style={{ fontSize: "12px", width: "400px" }} onChange={(e) => onInputChange(e)} readOnly required />
                    </div>

                    <div className="form-group">

                      <select class="form-select" aria-label="Default select example" name="product_size" id="product_size" className="form-control0" value={product_size}
                        onChange={(e) => onInputChange(e)} required>
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
                      <input type="text" name="quantity" id="quantity" className="form-control0" value={quantity} onChange={(e) => onInputChange(e)} required />
                    </div>
                    <button type="submit" className="btn btn-warning bt">Edit to item</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default UpdateCart;
