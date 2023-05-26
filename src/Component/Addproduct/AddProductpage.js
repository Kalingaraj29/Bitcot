import React, { useState } from "react";
import Footer from "../ProductList/Footer";
import Addproductvariant from "./Addproductvariant";
import Addproductgeneral from "./Addproductgeneral";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wholeData } from "../../features/counter/counterSlice";
import Header from "../ProductList/Header";

export default function AddProductpage() {
  const [variant, setVariant] = useState(false);
  const { addproduct, productdata, addvariantData } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  function handleproduct() {
    const len = productdata.length - 1 + 1;
    const payload = { ...addproduct, id: len + 1, variation: [addvariantData] };
    const data = [...productdata, payload];
    dispatch(wholeData(data));
  }

  const navigate = useNavigate();

  return (
    <div className="App">
      <Header/>
      <div className="page-wrapper">
        <aside className="sidebar-wrapper open custom-scrollbar wow fadeInLeft">
          <div className="sidebar-content-wrapper">
            <ul className="sidebar-list">
              <li
                className="sidebar-list-item has-subnav active open"
                id="listTem"
              >
                <button className="sidebar-link" id="pro_toggle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="Path_28214"
                    data-name="Path 28214"
                    d="M44.546,362.909H40.909a.909.909,0,0,0-.909.909v7.273a.909.909,0,0,0,.909.909h3.636a.909.909,0,0,0,.909-.909v-7.273a.909.909,0,0,0-.909-.909Zm-.909,7.273H41.818v-5.455h1.818Zm15.455-10.909H55.454a.909.909,0,0,0-.909.909v10.909a.909.909,0,0,0,.909.909h3.636a.909.909,0,0,0,.909-.909V360.182a.909.909,0,0,0-.909-.909Zm-.909,10.909H56.364v-9.091h1.818ZM51.818,352H48.182a.909.909,0,0,0-.909.909v18.182a.909.909,0,0,0,.909.909h3.636a.909.909,0,0,0,.909-.909V352.909a.909.909,0,0,0-.909-.909Zm-.909,18.182H49.091V353.818h1.818Z"
                    transform="translate(-40 -352)"
                    fill="#3e79f7"
                  />
                </svg>
                  <span className="item-text">Ecommerce</span>
                </button>
                <ul>
                  <li>
                    <Link to="/productlist" className="sidebar-link">
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link to="/addproduct" className="sidebar-link active">
                      Add Product
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="content-area-wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="filter_wrapper  d-block d-sm-none">
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
                    />
                  </div>
                </div>
              </div>
              <div className="card nav_pills_card nav_pills_card_new">
                <div className="card-body">
                  <div className="heading_wrapper heading_right_content">
                    <h1 className="head_title">Add Product</h1>
                    <div className="btn_wrapper">
                      <Link to="/productlist">
                        <button
                          type="button"
                          className="theme-btn btn-outline-secondary"
                        >
                          Discard
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="theme-btn theme-btn-primary"
                        onClick={() => {
                          handleproduct();
                          navigate("/productlist");
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <ul
                    className="nav nav-pills mb-0 nav_pills_wrapper"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setVariant(!variant)}
                        className="nav-link active"
                        id="pills-general-tab"
                        data-toggle="pill"
                        data-target="#pills-general"
                        type="button"
                        role="tab"
                        aria-controls="pills-general"
                        aria-selected="true"
                      >
                        General
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setVariant(!variant)}
                        className="nav-link "
                        id="pills-variation-tab"
                        data-toggle="pill"
                        data-target="#pills-variation"
                        type="button"
                        role="tab"
                        aria-controls="pills-variation"
                        aria-selected="false"
                      >
                        Variation
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                {/* General */}
                {!variant && <Addproductgeneral />}
                {/* varaint*/}
                {variant && <Addproductvariant />}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
