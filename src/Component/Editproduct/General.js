import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editedData } from "../../features/counter/counterSlice";
import { useParams } from "react-router-dom";

export default function General({ editdata}) {
 
  const [userInput, setUserInput] = useState({
    productName: editdata.length !== 0 ? editdata[0].productName : "",
    Description: editdata.length !== 0 ? editdata[0].description : "",
    price: editdata.length !== 0 ? editdata[0].variation[0].price : "",
    price1: editdata.length !== 0 ? editdata[0].variation[0].price : "",
    stock: editdata.length !== 0 ? editdata[0].variation[0].stock : "",
    tax:editdata.length !== 0? editdata[0].variation[0].price / editdata[0].variation[0].stock: "",
    category: editdata.length !== 0 ? editdata[0].category : "",
    status: editdata.length !== 0 ? editdata[0].status : "",
    variation: [
      {
          "variant": editdata.length !== 0 ? editdata[0].variation[0].variant :"",
          "productImage":editdata.length !== 0 ? editdata[0].variation[0].productImage:"",
          "price":editdata.length !== 0 ? editdata[0].variation[0].price:"",
          "stock": editdata.length !== 0 ? editdata[0].variation[0].stock:""
      },
      {
          "variant": editdata.length !== 0 ? editdata[0].variation[1].variant:"",
          "productImage": editdata.length !== 0 ? editdata[0].variation[1].productImage:"",
          "price": editdata.length !== 0 ? editdata[0].variation[1].price:"",
          "stock":editdata.length !== 0 ? editdata[0].variation[1].stock:"",
      }
  ]
  });
  const dispatch=useDispatch();
  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  dispatch(editedData(userInput)) 
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
                onChange={handleChange}
                value={userInput.Description}
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
                    type="text"
                    name="price"
                    className="form-control"
                    id="price"
                    value={userInput.price}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="comparePrice">
                    <span className="text-danger">*</span> Compare price
                  </label>
                  <input
                    type="text"
                    name="comparePrice"
                    className="form-control"
                    id="comparePrice"
                    value={userInput.price1}
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
                    type="text"
                    name="costPerItem"
                    className="form-control"
                    id="costPerItem"
                    value={userInput.stock}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="taxRate">
                    <span className="text-danger">*</span> Tax rate
                  </label>
                  <input
                    type="text"
                    name="taxRate"
                    className="form-control"
                    id="taxRate"
                    value={userInput.tax}
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
                    name="Category"
                    onChange={handleChange}
                    value={userInput.category}
                  >
                    
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
                    className="form-control"
                    id="productName"
                    name="Status"
                    onChange={handleChange}
                    value={userInput.status}
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
