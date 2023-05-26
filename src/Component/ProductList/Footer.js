import React from "react";
import "../ProductList/Productlist.css";
import "bootstrap/dist/css/bootstrap.css";
function Footer() {
  return (
    <div>
      <footer className="site_footer">
        <div className="copy-text-wrapper">
          Copyright 2023 bitcot All rights reserved.
        </div>
        <div className="footer-links-wrapper">
          <a>Terms &amp; Conditions </a> <span className="mx-2">|</span>
          <a>Privacy Policy </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
