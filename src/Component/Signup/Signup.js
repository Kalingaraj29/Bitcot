import React, { useReducer, useState } from "react";
import { ReactSVG } from "react-svg";
import "../Signup/Signup.css";
import "./assets/Logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { addUserCredentials } from "../../features/counter/counterSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState({
    Eemail: "",
    Epassword: "",
    Econfirmpassword: "",
    ReEnter: "",
    passwordLength: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }
  var hastrue = false;
  function handleSubmit(e) {
    e.preventDefault();
    Object.keys(error).forEach((element) => {
      error[element] = "";
    });
    hastrue = false;
    if (userInput.email === "") {
      error.Eemail = "Please enter the email";
      hastrue = true;
    }
    if (userInput.password === "") {
      error.Epassword = "Please enter the password";
      hastrue = true;
    }
    if (userInput.confirmpassword === "") {
      error.Econfirmpassword = "Please enter the confirm password";
      hastrue = true;
    }
    if (userInput.password !== userInput.confirmpassword) {
      error.ReEnter = "Password does not match";
      hastrue = true;
    }
    if (userInput.password.length <= 8) {
      error.passwordLength =
        "Password length should be greater than 8 characters";
      hastrue = true;
    }
    setError({ ...error });
    if (!hastrue) {
      dispatch(addUserCredentials(userInput));
      var Credential = getcredentialsfromLS();
      localStorage.setItem(
        "Usercredentials",
        JSON.stringify([...Credential, userInput])
      );
      navigate("/login");
    }
  }
  function getcredentialsfromLS() {
    var Credentials = JSON.parse(localStorage.getItem("Usercredentials"));
    return Credentials == null ? [] : Credentials;
  }

  return (
    <>
      <div className="App">
        <div id="wrapper">
          <div className="page-wrapper auth_wrapper">
            <div className="content-area-wrapper">
              <div className="content-wrapper">
                <div className="container">
                  <div className="card products_blc">
                    <div className="card-body">
                      <div className="card_content_wrap text-center"></div>
                      <div className="card_content_wrap text-center">
                        <div className="logo_wrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="39.912"
                            viewBox="0 0 100 39.912"
                          >
                            <g id="Logo" transform="translate(0 0)">
                              <g id="BitCot" transform="translate(0.46)">
                                <g
                                  id="Group_1"
                                  data-name="Group 1"
                                  transform="translate(22.131 0.454)"
                                >
                                  <rect
                                    id="Rectangle_1"
                                    data-name="Rectangle 1"
                                    width="2.514"
                                    height="16.88"
                                    transform="translate(0.349 6.744)"
                                    fill="#0b131f"
                                  />
                                  <path
                                    id="Path_1"
                                    data-name="Path 1"
                                    d="M490.19,92.318a1.606,1.606,0,1,1-1.606-1.606A1.606,1.606,0,0,1,490.19,92.318Z"
                                    transform="translate(-486.978 -90.712)"
                                    fill="#10b5ee"
                                  />
                                </g>
                                <path
                                  id="Path_2"
                                  data-name="Path 2"
                                  d="M659.389,133.8a2.694,2.694,0,0,0,.784,2.214,3.186,3.186,0,0,0,2.057.628,5.015,5.015,0,0,0,2.449-.594v2.182a5.554,5.554,0,0,1-1.388.545,6.894,6.894,0,0,1-1.649.182,6.583,6.583,0,0,1-1.894-.264,3.728,3.728,0,0,1-2.514-2.348,6.108,6.108,0,0,1-.359-2.215V123.818h-2.351v-2.248h2.351v-5.157h2.514v5.157h5.354v2.248h-5.354Z"
                                  transform="translate(-623.377 -114.587)"
                                  fill="#0b131f"
                                />
                                <path
                                  id="Path_3"
                                  data-name="Path 3"
                                  d="M946.565,215.527a8.539,8.539,0,0,1-4.146.9,8.927,8.927,0,0,1-3.56-.7,8.779,8.779,0,0,1-2.835-1.926,8.918,8.918,0,0,1-2.551-6.318,9.072,9.072,0,0,1,2.551-6.366,8.856,8.856,0,0,1,6.428-2.677,8.978,8.978,0,0,1,4.064.816,9.608,9.608,0,0,1,2.824,2.155l-2.449,2.645a9.14,9.14,0,0,0-1.943-1.552,4.924,4.924,0,0,0-2.53-.6,4.533,4.533,0,0,0-1.992.441,4.839,4.839,0,0,0-1.567,1.191,5.7,5.7,0,0,0-1.028,1.747,6.01,6.01,0,0,0-.376,2.139,6.229,6.229,0,0,0,.376,2.187,5.33,5.33,0,0,0,1.061,1.764,5.081,5.081,0,0,0,1.633,1.191,5.259,5.259,0,0,0,4.554-.163,9.5,9.5,0,0,0,2.008-1.55l2.383,2.35A10.834,10.834,0,0,1,946.565,215.527Z"
                                  transform="translate(-887.312 -191.956)"
                                  fill="#10b5ee"
                                />
                                <path
                                  id="Path_4"
                                  data-name="Path 4"
                                  d="M1322.123,210.908a8.954,8.954,0,0,1-4.848,4.8,9.816,9.816,0,0,1-7.33.016,8.836,8.836,0,0,1-4.816-4.767,9.141,9.141,0,0,1,.016-6.987,8.98,8.98,0,0,1,1.926-2.873,9.123,9.123,0,0,1,2.905-1.943,9.266,9.266,0,0,1,3.673-.718,9.459,9.459,0,0,1,3.674.7,8.929,8.929,0,0,1,2.906,1.926,8.835,8.835,0,0,1,1.91,2.857,8.934,8.934,0,0,1,.685,3.493A8.75,8.75,0,0,1,1322.123,210.908Zm-3.67-5.583a5.624,5.624,0,0,0-1.088-1.779,5.086,5.086,0,0,0-1.655-1.208,5.11,5.11,0,0,0-5.889,1.191,5.181,5.181,0,0,0-1.038,1.747,6.3,6.3,0,0,0-.356,2.139,6.072,6.072,0,0,0,.389,2.171,5.376,5.376,0,0,0,1.087,1.78,5.174,5.174,0,0,0,1.655,1.191,4.943,4.943,0,0,0,2.093.441,5.1,5.1,0,0,0,2.158-.441,4.99,4.99,0,0,0,1.638-1.191,5.168,5.168,0,0,0,1.039-1.747,6.322,6.322,0,0,0,.357-2.139A5.967,5.967,0,0,0,1318.452,205.324Z"
                                  transform="translate(-1238.201 -191.956)"
                                  fill="#10b5ee"
                                />
                                <path
                                  id="Path_5"
                                  data-name="Path 5"
                                  d="M1728.648,133.2a2.192,2.192,0,0,0,.555,1.675,2.224,2.224,0,0,0,1.567.514,5.363,5.363,0,0,0,2.449-.595v3.273a6.807,6.807,0,0,1-1.6.661,7.468,7.468,0,0,1-1.958.232,7.211,7.211,0,0,1-2-.265,4.067,4.067,0,0,1-1.6-.862,3.829,3.829,0,0,1-1.036-1.573,7.069,7.069,0,0,1-.362-2.436v-9.212h-2.187v-3.405h2.188v-4.794h3.983v4.794h4.636v3.405h-4.636Z"
                                  transform="translate(-1633.937 -114.587)"
                                  fill="#10b5ee"
                                />
                                <path
                                  id="Path_6"
                                  data-name="Path 6"
                                  d="M83.556,90.341a7.993,7.993,0,0,0-4.4,1.335,6.287,6.287,0,0,0-.993.816l-.544.552V82.2H74.929v23.781h2.692V103.61l.529.469c.111.1.219.2.333.317.156.155.317.313.5.459a7.854,7.854,0,0,0,4.576,1.423,7.947,7.947,0,0,0,7.908-7.968A7.854,7.854,0,0,0,83.556,90.341Zm.032,13.576a5.65,5.65,0,1,1,0-11.282,5.644,5.644,0,0,1,0,11.282Z"
                                  transform="translate(-74.929 -82.2)"
                                  fill="#0b131f"
                                />
                              </g>
                              <text
                                id="Solving_Digital_Challenges"
                                data-name="Solving Digital Challenges"
                                transform="translate(0 37.912)"
                                fill="#092439"
                                font-size="8"
                                font-family="Inter-Medium, Inter"
                                font-weight="500"
                              >
                                <tspan x="0" y="0">
                                  Solving Digital Challenges
                                </tspan>
                              </text>
                            </g>
                          </svg>
                          <h6>Create an account</h6>
                        </div>
                        <form onSubmit={handleSubmit}>
                          <div className="form_wrapper">
                            <div className="mb-4">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label label_modify"
                              >
                                <span className="mendatary">*</span> Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                placeholder="demo@gmail.com"
                                className="form-control input_modify"
                                id="exampleFormControlInput1"
                                value={userInput.email}
                                onChange={handleChange}
                              />
                              {error?.Eemail && (
                                <span style={{ color: "red" }}>
                                  {error.Eemail}
                                </span>
                              )}
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label label_modify"
                              >
                                {" "}
                                <span className="mendatary">*</span> Password
                              </label>
                              <input
                                type="password"
                                placeholder="*****"
                                name="password"
                                className="form-control input_modify"
                                id="exampleFormControlInput2"
                                value={userInput.password}
                                onChange={handleChange}
                              />
                              {error?.Epassword && (
                                <span style={{ color: "red" }}>
                                  {error.Epassword}
                                </span>
                              )}
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label label_modify"
                              >
                                {" "}
                                <span className="mendatary">*</span>Confirm
                                Password
                              </label>
                              <input
                                type="password"
                                name="confirmpassword"
                                className="form-control input_modify"
                                id="exampleFormControlInput3"
                                placeholder="*****"
                                value={userInput.confirmpassword}
                                onChange={handleChange}
                              />
                              '{" "}
                              {error?.Econfirmpassword && (
                                <span style={{ color: "red" }}>
                                  {error.Econfirmpassword}
                                </span>
                              )}
                              {error?.ReEnter && (
                                <span style={{ color: "red" }}>
                                  {error.ReEnter}
                                </span>
                              )}
                              <br />
                              {error?.passwordLength && (
                                <span style={{ color: "red" }}>
                                  {error.passwordLength}
                                </span>
                              )}
                            </div>
                            <div className="mb-0 auth_btn">
                              <button className="theme-btn-primary theme-btn">
                                Sign Up
                              </button>
                            </div>
                            <div className="already">
                              {" "}
                              <Link to="/login">Already have Account</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
