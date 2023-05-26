import React, { useState } from "react";
import "../ProductList/Productlist.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import Productlistitems from "./Productlistitems";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Aside from "./Aside";

export default function Productlist() {
  const { loginCred } = useSelector((state) => state.counter);
  if (!loginCred) {
    <Navigate to="/login" replace={true} />;
  }
  const [searchvalue, setSearchvalue] = useState("");
  const [selectValue, setselectValue] = useState("");
  const { Editdata } = useSelector((state) => state.counter);
  function handleChange(e) {
    setSearchvalue(e.target.value);
  }
  function handleOptionChange(e) {
    setselectValue(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="page-wrapper">
        <Aside />
        <div className="content-area-wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="filter_wrapper  d-block d-sm-none">
                <div className="filet_left_content">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <img
                          src="images/icons/magnifying-glass.png"
                          alt="search"
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control input_modify"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="heading_wrapper d-flex flex-wrap">
                <h1 className="head_title">Product List</h1>
                <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">E-Commerce</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Product List
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card products_blc">
                <div className="card-body">
                  <div className="filter_wrapper">
                    <div className="filet_left_content">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                              alt="search"
                            />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control input_modify"
                          placeholder="Search"
                          value={searchvalue}
                          onChange={handleChange}
                        />
                      </div>
                      <select
                        className="custom-select input_modify"
                        onChange={handleOptionChange}
                      >
                        <option value="All">All</option>
                        <option value="clothe">Clothes</option>
                        <option value="device">Devices</option>
                        <option value="shoes">Shoes</option>
                        <option value="bags">Bags</option>
                        <option value="watches">watches</option>
                      </select>
                    </div>
                    <div className="filter_btn_wrapper">
                      <Link
                        style={{
                          backgroundColor: "blue",
                          color: "whitesmoke",
                          opacity: "0.7",
                        }}
                        className="btn theme-btn-primary theme-btn"
                        to="/addproduct"
                      >
                        Add Product
                      </Link>
                    </div>
                  </div>
                  {/* product list*/}
                  <Productlistitems
                    searchvalue={searchvalue}
                    selectValue={selectValue}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer*/}
          <Footer />
        </div>
      </div>
    </div>
  );
}
