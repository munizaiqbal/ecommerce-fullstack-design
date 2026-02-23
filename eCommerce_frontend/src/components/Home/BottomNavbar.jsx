import React from "react";
import menu from "../../assets/Home/menu.png";
import { Link } from "react-router-dom";
function BottomNavbar() {
  return (
    <div className=" border-bottom ">
      <div className="container-lg d-flex align-items-center justify-content-between">
        {/* hamburger*/}
        <img src={menu} alt="logo" />

        {/* Category */}
        <nav className="navbar navbar-expand-md ">
          <div className="container-lg">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/products"  className="nav-link">
                    <span>All Category</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hot Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gift Boxes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu Items
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Dropdown */}
        <div className="d-flex gap-3">
          <div className="dropdown">
            <a
              className="btn  dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English,USD
            </a>
          </div>

          <div className="dropdown">
            <a
              className="btn  dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ship to
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
