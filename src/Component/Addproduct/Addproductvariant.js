import React, { useState } from "react";
import {
  addProductdata,
  varaintdata,
} from "../../features/counter/counterSlice";
import { useDispatch } from "react-redux";

export default function Addproductvariant() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    variant: "",
    productImage: "",
    price: "",
    stock: "",
  });

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    dispatch(varaintdata(userInput));
  }

  return (
    <div className="card nav_pills_card">
      <div className="card-body">
        <div>
          <div className="form-title">Variants</div>
          <p>
            Add A Custome Variat Options For Your Product, Like Different Sizes
            Or Colors.
          </p>
          <div className="">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor=" productName">
                    <span className="text-danger">*</span> Variant
                  </label>
                  <input
                    type="text"
                    name="variant"
                    className="form-control"
                    value={userInput.variant}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor=" productName">
                    <span className="text-danger">*</span> Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={userInput.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor=" productName">
                    <span className="text-danger">*</span> Stock keeping unit
                  </label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    value={userInput.stock}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group uploader-wrapper">
            <label htmlFor="Description">
              <span className="text-danger">*</span> Upload Image
            </label>
            <div className="uploader-wrapper-inner">
              <img
                src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg"
                alt="pictures"
              />
              <input
                type="file"
                name="productImage"
                value={userInput.productImage}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="uploader-add-btne" type="button">
            Add field
          </button>
        </div>
      </div>
    </div>
  );
}
