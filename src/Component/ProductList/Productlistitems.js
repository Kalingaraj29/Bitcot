import React, { useEffect, useState } from "react";
import "../ProductList/Productlist.css";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  editID,
  productData,
  wholeData,
} from "../../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Productlistitems({ searchvalue, selectValue }) {
  const { editid, Editdata, edittag, productEditdata, wholeData } = useSelector(
    (state) => state.counter
  );
  const [productdata, setProductdata] = useState([]);
  const [producteditdata, setProducteditdata] = useState([]);
  const [singleproductdata, setSingleproductdata] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    async function apiCall() {
      try {
        const { data } = await axios.get(
          "https://raw.githubusercontent.com/abdulbitcot/React-Coding-Challenge-Experience/main/sample.json"
        );
        setProductdata(data);
        dispatch(productData(data));
      } catch (error) {
        console.log(error);
      }
    }
    apiCall();
  }, [productData]);
  useEffect(() => {
    const searchData = productdata.filter((ele) =>
      ele.productName.toLowerCase().includes(searchvalue)
    );
    setSingleproductdata(searchData);
  }, [searchvalue]);

  useEffect(() => {
    const selectedData = productdata.filter(
      (ele) => ele.category.toLowerCase() === selectValue
    );
    setFilterData(selectedData);
  }, [selectValue]);

  function handleDelete(id) {
    const deleteData = productdata.filter((ele) => ele.id !== id);
    setProductdata(deleteData);
  }

  return (
    <div className="app_table table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <label className="checkbox_container text-uppercase"> ID</label>
            </th>
            <th scope="col" className="th_didivder">
              Products
              <span className="filter-order-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                >
                  <g
                    id="Group_22146"
                    data-name="Group 22146"
                    transform="translate(-501 -126.5)"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropdown"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,13.5,14.5,19,20,13.5Z"
                      transform="translate(492 120.5)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                    <path
                      id="Icon_ionic-md-arrow-dropdown-2"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,19l5.5-5.5L20,19Z"
                      transform="translate(492 113)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                  </g>
                </svg>
              </span>
            </th>
            <th scope="col" className="th_didivder">
              Category
              <span className="filter-order-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                >
                  <g
                    id="Group_22146"
                    data-name="Group 22146"
                    transform="translate(-501 -126.5)"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropdown"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,13.5,14.5,19,20,13.5Z"
                      transform="translate(492 120.5)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                    <path
                      id="Icon_ionic-md-arrow-dropdown-2"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,19l5.5-5.5L20,19Z"
                      transform="translate(492 113)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                  </g>
                </svg>
              </span>
            </th>
            <th scope="col" className="th_didivder">
              Price
              <span className="filter-order-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                >
                  <g
                    id="Group_22146"
                    data-name="Group 22146"
                    transform="translate(-501 -126.5)"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropdown"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,13.5,14.5,19,20,13.5Z"
                      transform="translate(492 120.5)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                    <path
                      id="Icon_ionic-md-arrow-dropdown-2"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,19l5.5-5.5L20,19Z"
                      transform="translate(492 113)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                  </g>
                </svg>
              </span>
            </th>
            <th scope="col" className="th_didivder">
              Stock
              <span className="filter-order-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                >
                  <g
                    id="Group_22146"
                    data-name="Group 22146"
                    transform="translate(-501 -126.5)"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropdown"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,13.5,14.5,19,20,13.5Z"
                      transform="translate(492 120.5)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                    <path
                      id="Icon_ionic-md-arrow-dropdown-2"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,19l5.5-5.5L20,19Z"
                      transform="translate(492 113)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                  </g>
                </svg>
              </span>
            </th>
            <th scope="col" className="th_didivder">
              Status
              <span className="filter-order-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                >
                  <g
                    id="Group_22146"
                    data-name="Group 22146"
                    transform="translate(-501 -126.5)"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropdown"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,13.5,14.5,19,20,13.5Z"
                      transform="translate(492 120.5)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                    <path
                      id="Icon_ionic-md-arrow-dropdown-2"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,19l5.5-5.5L20,19Z"
                      transform="translate(492 113)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                  </g>
                </svg>
              </span>
            </th>
            <th scope="col" className="th_didivder">
              Action
              <span className="filter-order-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                >
                  <g
                    id="Group_22146"
                    data-name="Group 22146"
                    transform="translate(-501 -126.5)"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropdown"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,13.5,14.5,19,20,13.5Z"
                      transform="translate(492 120.5)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                    <path
                      id="Icon_ionic-md-arrow-dropdown-2"
                      data-name="Icon ionic-md-arrow-dropdown"
                      d="M9,19l5.5-5.5L20,19Z"
                      transform="translate(492 113)"
                      fill="rgba(69,85,96,0.2)"
                    ></path>
                  </g>
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/*Product Data*/}
          {!searchvalue &&
            productdata &&
            productEditdata.length === 0 &&
            wholeData.length === 0 &&
            singleproductdata.length === 0 &&
            productdata.map((ele, index) => {
              const {
                id,
                productName,
                category,
                variation,
                status,
                productImage,
              } = ele;
              return (
                <tr key={index}>
                  <td>
                    <label className="checkbox_container text-uppercase">
                      {id}
                    </label>
                  </td>
                  <td>
                    <div className="media align-items-center">
                      <div className="product_thumb">
                        <img src={variation[0].productImage} alt="Images" />
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{category}</td>

                  <td>${variation[0].price}</td>
                  <td>{variation[0].stock}</td>
                  <td>{status}</td>
                  <td className="actions">
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{ background: "whitesmoke", border: "none" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                            alt="Donts"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div
                              style={{ border: "none" }}
                              onClick={() => {
                                dispatch(editID(id));
                                navigate(`/editproduct/${id}`);
                              }}
                            >
                              Edit Product
                            </div>
                          </Dropdown.Item>
                          <br />
                          <Dropdown.Item>
                            <div
                              style={{ border: "none", cursor: "pointer" }}
                              onClick={() => {
                                handleDelete(id);
                              }}
                            >
                              Delete
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              );
            })}
          {/*Searched Data*/}
          {singleproductdata.length >= 1 &&
            filterData.length === 0 &&
            singleproductdata.map((ele, index) => {
              const {
                id,
                productName,
                category,
                variation,
                status,
                productImage,
              } = ele;
              return (
                <tr key={index}>
                  <td>
                    <label className="checkbox_container text-uppercase">
                      {id}
                    </label>
                  </td>
                  <td>
                    <div className="media align-items-center">
                      <div className="product_thumb">
                        <img src={variation[0].productImage} alt="Images" />
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{category}</td>

                  <td>${variation[0].price}</td>
                  <td>{variation[0].stock}</td>
                  <td>{status}</td>
                  <td className="actions">
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{ background: "whitesmoke", border: "none" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                            alt="Donts"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div
                              style={{ border: "none" }}
                              onClick={() => {
                                dispatch(editID(id));
                                navigate(`/editproduct/${id}`);
                              }}
                            >
                              Edit Product
                            </div>
                          </Dropdown.Item>
                          <br />
                          <Dropdown.Item>
                            <div
                              style={{ border: "none", cursor: "pointer" }}
                              onClick={() => {
                                handleDelete(id);
                              }}
                            >
                              Delete
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              );
            })}
          {/*Filtered Data*/}
          {filterData.length >= 1 &&
            filterData.map((ele, index) => {
              const {
                id,
                productName,
                category,
                variation,
                status,
                productImage,
              } = ele;
              return (
                <tr key={index}>
                  <td>
                    <label className="checkbox_container text-uppercase">
                      {id}
                    </label>
                  </td>
                  <td>
                    <div className="media align-items-center">
                      <div className="product_thumb">
                        <img src={variation[0].productImage} alt="Images" />
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{category}</td>

                  <td>${variation[0].price}</td>
                  <td>{variation[0].stock}</td>
                  <td>{status}</td>
                  <td className="actions">
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{ background: "whitesmoke", border: "none" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                            alt="Donts"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div
                              style={{ border: "none" }}
                              onClick={() => {
                                dispatch(editID(id));
                                navigate(`/editproduct/${id}`);
                              }}
                            >
                              Edit Product
                            </div>
                          </Dropdown.Item>
                          <br />
                          <Dropdown.Item>
                            <div
                              style={{ border: "none", cursor: "pointer" }}
                              onClick={() => {
                                handleDelete(id);
                              }}
                            >
                              Delete
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              );
            })}

          {/*Filtered Data*/}
          {searchvalue &&
            singleproductdata.length === 0 &&
            filterData.length === 0 && (
              <h1 className="NoRecord">No Record found</h1>
            )}
          {/*edited data*/}
          {productEditdata &&
            productEditdata.length > 0 &&
            productEditdata.map((ele, index) => {
              const {
                id,
                productName,
                category,
                variation,
                status,
                productImage,
              } = ele;
              return (
                <tr key={index}>
                  <td>
                    <label className="checkbox_container text-uppercase">
                      {id}
                    </label>
                  </td>
                  <td>
                    <div className="media align-items-center">
                      <div className="product_thumb">
                        <img src={variation[0].productImage} alt="Images" />
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{category}</td>

                  <td>${variation[0].price}</td>
                  <td>{variation[0].stock}</td>
                  <td>{status}</td>
                  <td className="actions">
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{ background: "whitesmoke", border: "none" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                            alt="Donts"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div
                              style={{ border: "none" }}
                              onClick={() => {
                                dispatch(editID(id));
                                navigate(`/editproduct/${id}`);
                              }}
                            >
                              Edit Product
                            </div>
                          </Dropdown.Item>
                          <br />
                          <Dropdown.Item>
                            <div
                              style={{ border: "none", cursor: "pointer" }}
                              onClick={() => {
                                handleDelete(id);
                              }}
                            >
                              Delete
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              );
            })}

          {/*newly added data data*/}
          {wholeData &&
            wholeData.length > 0 &&
            wholeData.map((ele, index) => {
              const { id, productName, category, status, stock, variation } =
                ele;
              return (
                <tr key={index}>
                  <td>
                    <label className="checkbox_container text-uppercase">
                      {id}
                    </label>
                  </td>
                  <td>
                    <div className="media align-items-center">
                      <div className="product_thumb">
                        <img src={variation[0].productImage} alt="Images" />
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{category}</td>
                  <td>${variation[0].price}</td>
                  <td>{variation[0].stock}</td>
                  <td>{status}</td>

                  <td className="actions">
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          style={{ background: "whitesmoke", border: "none" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                            alt="Donts"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div
                              style={{ border: "none" }}
                              onClick={() => {
                                dispatch(editID(id));
                                navigate(`/editproduct/${id}`);
                              }}
                            >
                              Edit Product
                            </div>
                          </Dropdown.Item>
                          <br />
                          <Dropdown.Item>
                            <div
                              style={{ border: "none", cursor: "pointer" }}
                              onClick={() => {
                                handleDelete(id);
                              }}
                            >
                              Delete
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Productlistitems;
