import React, { useState } from "react";
import { addProductdata } from "../../features/counter/counterSlice";
import { useDispatch } from "react-redux";

export default function Addproductgeneral() {
  const [userInput, setUserInput] = useState({
    productName: "",
    Description: "",
    price: "",
    stock: "",
    comparePrice: "",
    category: "",
    costPerItem: "",
    status: "",
    taxRate: "",
  });
  const dispatch = useDispatch();
  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    dispatch(addProductdata(userInput));
  }

  return (
    <div
      className="tab-pane fade show active"
      id="pills-general"
      role="tabpanel"
      aria-labelledby="pills-general-tab"
    >
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Basic Info</div>
            <div className="form-group">
              <label htmlFor="productName">
                <span className="text-danger">*</span> Product Name
              </label>
              <input
                type="name"
                name="productName"
                className="form-control"
                id="productName"
                onChange={handleChange}
                value={userInput.productName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">
                <span className="text-danger">*</span> Description
              </label>
              <textarea
                type="text"
                id="Description"
                className="form-control"
                name="Description"
                rows="3"
                value={userInput.Description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Pricing</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="price">
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
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="comparePrice">
                    <span className="text-danger">*</span> Compare price
                  </label>
                  <input
                    type="number"
                    name="comparePrice"
                    className="form-control"
                    value={userInput.comparePrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor=" costPerItem">
                    <span className="text-danger">*</span> Cost per item
                  </label>
                  <input
                    type="number"
                    name="costPerItem"
                    className="form-control"
                    value={userInput.costPerItem}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="taxRate">
                    <span className="text-danger">*</span> Tax rate
                  </label>
                  <input
                    type="number"
                    name="taxRate"
                    className="form-control"
                    value={userInput.tax}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Organization</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="productName">
                    <span className="text-danger">*</span> Category
                  </label>
                  <select
                    className="form-control"
                    id="productName"
                    name="category"
                    value={userInput.category}
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="Clothe">Clothe</option>
                    <option value="Bags">Bags</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Watches">Watches</option>
                    <option value="Devices">Devices</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Description">
                    <span className="text-danger">*</span> Status
                  </label>
                  <select
                    value={userInput.status}
                    className="form-control"
                    id="productName"
                    name="status"
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="In stock">In stock</option>
                    <option value="Limited stock">Limited stock</option>
                    <option value="Out of stock">Out of stock</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
