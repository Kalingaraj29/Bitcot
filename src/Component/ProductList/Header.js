import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addLoginCredentails } from "../../features/counter/counterSlice";

export default function Header() {
  const { loginCred } = useSelector((state) => state.counter);
  var email = loginCred.email.split("@");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="topbar-wrapper">
      <div className="account-wrapper">
        <div className="account-logo-wrapper">
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
                fontSize="8"
                fontFamily="Inter-Medium, Inter"
                fontWeight="500"
              >
                <tspan x="0" y="0">
                  Solving Digital Challenges
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <button className="toggle-sidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.789"
          height="17.649"
          viewBox="0 0 20.789 17.649"
        >
          <g
            id="Icon_feather-align-left"
            data-name="Icon feather-align-left"
            transform="translate(0.75 0.75)"
          >
            <path
              id="Path_28241"
              data-name="Path 28241"
              d="M4.5,15H15.991"
              transform="translate(3.298 -9.933)"
              fill="none"
              stroke="#1a3353"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              id="Path_28242"
              data-name="Path 28242"
              d="M4.5,9H23.789"
              transform="translate(-4.5 -9)"
              fill="none"
              stroke="#1a3353"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              id="Path_28243"
              data-name="Path 28243"
              d="M4.5,21H15.991"
              transform="translate(3.298 -10.234)"
              fill="none"
              stroke="#1a3353"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              id="Path_28244"
              data-name="Path 28244"
              d="M4.5,27H23.789"
              transform="translate(-4.5 -10.851)"
              fill="none"
              stroke="#1a3353"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              id="Icon_ionic-md-arrow-dropdown"
              data-name="Icon ionic-md-arrow-dropdown"
              d="M0,0,4.934,4.934,9.869,0Z"
              transform="translate(4.934 3.049) rotate(90)"
              fill="#1a3353"
            />
          </g>
        </svg>
      </button>
      <div className="user-wrapper">
        <div className="filter_wrapper d-none d-sm-block">
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
                readOnly={true}
              />
            </div>
          </div>
        </div>
        <ul className="head_right_cont">
          <li className="list-items ">
            <a href="#" className="top_links">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAABHNCSVQICAgIfAhkiAAAAalJREFUOE+dVEFOwkAU/b8NcYsnsCyExgApO9NiUm5Qb8AR6gnkBuINuAG9AU0E4g5CjSm4sN6ArZL2+1sYLGUwxknaxcy8/95/82YQJEMz7PJZvBnyks2f/6mWbqO5vy5uRRm42rAGvFBGNXYpVvuA4C8Xk/6fwLWG6SMqfrgY9/Rmu0eU2Mtgmqo4GEfMunGtMduId2m5nRGr6ITz5yiPPgBXGzcOQjIEokcExQtfxr5eb9sEiQOI3SQm++11OhcF9uAd4wyB7sJgOihKrDUtFwju2byKMG8PrtVNNga1ZTBxZCamc6kXvMcT5v2AU5MABjJWUWxrHhmCIAe21kjopH2eYs76x6QnnM+DicGdf4PZjHNZkvayM2YaseyMNPtdXpmGouJMTJ6SvTXNIkGSgfWG2SWArixFkiOLiBR3FTx5GZireafyWwSnuU/nVsGki1sHyeP4GcX4yeTvwvTOaWshJyfi5Fz81qd0DeHj+GKkShR64BS1BIjbWhdzvXc7Xzl7CJLNnAhGCigDgtjlQ6nwSRhFBdLHYNcXX34qE2D0pZZc2fl/A8rZ2D0jIxsVAAAAAElFTkSuQmCC"
                alt="notify"
              />
              <span className="notify_num">5</span>
            </a>
          </li>
          <li className="list-items ">
            <a href="#" className="top_links">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAndJREFUOE+dVE1y0zAUthQPLEl30DIT5wS4P6xrToDTlnWcE9ScIOYGvgHJmjbNDWrWtMGcIGaGhCVmS2OL79NIwQ2ZoYNm3tiSnj6973vvSThbxlM/9KSUfSVEIBzHh0sbVirHyfGdPq6qcZFPy82j8P0zPD9s37nuUCkVY/Un7AnsC+yFUOojwI/NunKUSpezybvm+TUYgX61WtfY3JFCRKquExwu8Z/WSl0/qqod7Oc4MAVQjr0Uvlwf2Cg1WAOIlHpCygJgn+uq6rqu6xFseXspdg9PQ+xfaWDXjQE6JG3s9YijwfYOT1PoQccM1jehF1jj7XRKaykDUdc+/80+ZZjCQsiSfJ9NUqHFbrXmoPPq281FZqKk0BSYwncaulA/nQxEF5Des4OTWAgxxLwrdo/OEoQbIlRS1AN0lAV/fnQWWJrcM4f78N9v+JdIUCz2Dk4yJWW2vLlINOWXb3zqRY043wTbnJvLR1oORgFtYgCSmmN1oUYPmdNH1nWEyEATYA1N/vuXdUgwCh2BFjPzT1pbaUJ3MAq0Zo4Q+eL2klW/1oy1xGw9UDMGUgqTnXNE1m1k569sWnBmn1EsZhOtqSmlOX4HwkwKphYOI5NNthXpe1tELHRipOwtPn3ITWlRJk+n3yyc81XAAm/8CmN0A5SJhz58j8P7uLDNmjP7Hfhnxr9HzdeNjkSQ92sW62q1KmxX8DJbtNA3YoODsoem56VXsDGAIh2tpWHojjA/xmKMW9m8HYC/bbwac+yN0Ys/kLSkCXQPzIKahNCRbxlHAfNgLGq2HLVkk8e2nOzZe49jM8o7KUP90ipFID0wJzCfHF2Tm+M3KNSXX4AA+9gAAAAASUVORK5CYII="
                alt="globe"
              />
            </a>
          </li>
          <li className="list-items ">
            <a href="#" className="top_links">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAq1JREFUOE+dVE1SGkEUpgdCtpNdIqmSnCADmLV4Av7MWnKC4AlCTuBwAmEt6OQEjGtByQmEqqDuwG1guvN9k26qFYNWuqprft5733vvez8i8czZKtTKUDnCdYUQ7emge/icjdik8NYrZ51k8go6E9wR7oFQ6sv08rS9ye4BqI6qpADwOoo6y1TKk0r1HSH2fg26IeRjgIU3w179Xb7aSAhRgpMwLWVrPArmxtEKVAOe6ai28SQAzxuAuHzJFGo+HH7VsiwAz5UQu/ju0NEaaCZfDaHgQuhlPn32ElHk43suHKc5vThh6vHZ2tlvCimLkPnQDYwjvK8CtCMlTyUZRbm7UWCi3ETdXyeFGh0ymOxapLooVAjsVIxi1iu7Nm8xHflqHREfG87XQN/v7BdRlDOE3pkOe43YCDQoKY/x6mmDOXg8NNXXNn3w3FBR9MNkKLRhnyng3iN9zwh1ah/hqAWHY/QpnW1D54PR0bVgsXiYZUXoNmE7NEm8TSJkioCPIr9SiPb28tQ3ujF1qVQ9odQ3OjSgce/ZgOTwdzI5swGe+mdsTEuSX4K2ITjAHSG90B5DyJjBDG1VebVYjOGE41rHd860GcHYu8ioCNkkDfoEvS8cp4wqcsZLmJLvN4Nu066unYE9prpjriH/CbsgvVz67JDHYzqC0RzVpdf40BCR0WECeyC0B8FUH6KKXY+1MX3JwjAONcfs7RlAc+a/DcrKZzmmFDKKpRDq7uLk3E6fLSil3DV9ybFl1Z8cU24dFOoI10fFswCKU0YRwtthb4/v1tLh55z7FbqkikuHNvFZRapTaeNfCfceyk1w6TIKU22zdNCL5aTjtPWGmpBzm+uXLOlrRh+huo6UAarcMt1h02K/bwSlorVD+flgjP8bNAZGcdAVLrf/v4Ds/38AyROXcTtJZLUAAAAASUVORK5CYII="
                alt="setting"
              />
            </a>
          </li>
          <li className="list-items user_peofile">
            <div
              className="media align-items-center dropdown-toggle "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avtar_blc">
                <img
                  src="data:image/png;base64,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"
                  alt="UserImage"
                />
              </div>

              <div className="dropdown">
                <p style={{ marginTop: "20px" }} onClick={handleOpen}>
                  {email[0]}
                </p>
                {open ? (
                  <ul className="menu">
                    <li
                      style={{ color: "black", opacity: "0.7" }}
                      onClick={() => {
                        dispatch(addLoginCredentails({}));
                        navigate("/login");
                      }}
                    >
                      <p>LogOut</p>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
