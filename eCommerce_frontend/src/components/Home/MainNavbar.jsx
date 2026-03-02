import logo from "../../assets/Home/logo.png";
import { Link,useNavigate } from "react-router-dom";
import profile from "../../assets/Home/profile.png";
import message from "../../assets/Home/message.png";
import orders from "../../assets/Home/heart.png";
import cart from "../../assets/Home/cart.png";
import useCart from "../../context/useCart";
import { useState } from "react";
import "./MainNavbar.css"; 

function MainNavbar({ showSearch = true }) {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
const navigate = useNavigate();

const handleSearch = (e) => {
  e.preventDefault();
  // Navigate to products page with query param without reload
  navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
};
  return (
    <div className="py-3 border-bottom">
      <div className="container-lg">
        {/* Top row: Logo left, Icons right */}
        <div className="d-flex w-100 justify-content-between align-items-center d-md-none mb-3">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          {/* Icons */}
          <div className="d-flex gap-2 px-2">
            <a
              href="#"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={profile} alt="" />
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="d-md-flex d-none flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={message} alt="" />
              <span>Message</span>
            </a>
            <a
              href="#"
              className="d-md-flex d-none flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={orders} alt="" />
              <span>Orders</span>
            </a>
            <Link
              to="/cart"
              className="position-relative d-flex flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={cart} alt="" />
              {totalQuantity > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {totalQuantity}
                </span>
              )}
              <span>Cart</span>
            </Link>
          </div>
        </div>
        {/* Search input row for small screens */}
        <div className="d-md-none mb-3">
          <form className="input-group w-100" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control border border-primary"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>

        {/* Desktop row: Logo left, Search center, Icons right */}
        <div className="d-none d-md-flex w-100 justify-content-between align-items-center">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          {/* Search input */}
          {showSearch && (
            <form
              className="input-group mx-auto"
              style={{ maxWidth: "500px" }}
              onSubmit={handleSearch}
            >
              <input
                type="text"
                className="form-control border border-primary"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          )}
          {/* Icons */}
          <div className="d-flex gap-3">
            <a
              href="#"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={profile} alt="" />
              <span>Profile</span>
            </a>

            <a
              href="#"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={orders} alt="" />
              <span>Orders</span>
            </a>
            <Link
              to="/cart"
              className="position-relative d-flex flex-column align-items-center text-secondary text-decoration-none"
            >
              <img src={cart} alt="" />
              {totalQuantity > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {totalQuantity}
                </span>
              )}
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
