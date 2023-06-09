import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
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
                  <Link to="/productlist" className="sidebar-link active">
                    Product List
                  </Link>
                </li>
                <li>
                  <Link to="/addproduct" className="sidebar-link ">
                    Add Product
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
