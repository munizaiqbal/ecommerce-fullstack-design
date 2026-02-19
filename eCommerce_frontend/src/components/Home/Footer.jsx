import React from "react";
import facebook from "../../assets/Home/facebook.png";
import insta from "../../assets/Home/insta.png";
import twitter from "../../assets/Home/twitter.png";
import linkedIn from "../../assets/Home/linkedIn.png";
import appStore from "../../assets/Home/appstore.png";
import googlePlay from "../../assets/Home/googlePlay.png";
import smallLogo from "../../assets/Home/smallLogo.png";

function Footer() {
  return (
    <div className="container-xxl d-flex flex-column   flex-sm-row flex-wrap gap-2 p-3 w-100">
      <div className="flex-grow-1" style={{ maxWidth: "250px" }}>
        <img
          className="pb-2"
          src={smallLogo}
          alt="logo"
          style={{ width: "90px" }}
        />
        <p>
          Best information about the company gies here but now lorem ipsum is
        </p>
        <div className="icons d-flex ">
          <ul className="list-unstyled d-flex gap-2">
            <li>
              <a className="text-decoration-none" href="#">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={insta} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedIn} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow-1" style={{ minWidth: "150px" }}>
        <h5 className="pb-2">About</h5>
        <ul className="list-unstyled">
          <li className="text-muted small">About Us </li>
          <li className="text-muted small">Find Store</li>
          <li className="text-muted small">Catalogues</li>
          <li className="text-muted small">Blogs</li>
        </ul>
      </div>
      <div className="flex-grow-1" style={{ minWidth: "150px" }}>
        <h5 className="pb-2">Partnership</h5>
        <ul className="list-unstyled">
          <li className="text-muted small">About Us </li>
          <li className="text-muted small">Find Store</li>
          <li className="text-muted small">Catalogues</li>
          <li className="text-muted small">Blogs</li>
        </ul>
      </div>
      <div className="flex-grow-1" style={{ minWidth: "150px" }}>
        <h5 className="pb-2">Information</h5>
        <ul className="list-unstyled">
          <li className="text-muted small">Help Center </li>
          <li className="text-muted small">Money Refund</li>
          <li className="text-muted small">Shipping</li>
          <li className="text-muted small">Contact Us</li>
        </ul>
      </div>
      <div className="flex-grow-1" style={{ minWidth: "150px" }}>
        <h5 className="pb-2">For Users</h5>
        <ul className="list-unstyled">
          <li className="text-muted small">About Us </li>
          <li className="text-muted small">Find Store</li>
          <li className="text-muted small">Catalogues</li>
          <li className="text-muted small">Blogs</li>
        </ul>
      </div>
      <div className="flex-grow-1" style={{ minWidth: "150px" }}>
        <h5 className="pb-2">Get App</h5>
        <div className="images d-flex flex-column gap-2">
          <img src={appStore} alt="aapstore" style={{width:'100px'}}/>
          <img src={googlePlay} alt="aapstore"style={{width:'100px'}} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
