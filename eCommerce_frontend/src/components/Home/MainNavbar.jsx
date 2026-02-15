import logo from "../../assets/Home/logo.png";
import profile from "../../assets/Home/profile.png";
import message from "../../assets/Home/message.png";
import orders from "../../assets/Home/heart.png";
import cart from "../../assets/Home/cart.png";

function MainNavbar() {
  return (
    <div className="py-3 border-bottom">
      <div className="container-lg">

        {/* Top row: Logo left, Icons right */}
        <div className="d-flex w-100 justify-content-between align-items-center d-md-none mb-3">
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* Icons */}
          <div className="d-flex gap-2 px-2">
            <a href="#" className="d-flex flex-column align-items-center text-secondary text-decoration-none">
              <img src={profile} alt="" />
              <span>Profile</span>
            </a>
            <a href="#" className="d-md-flex d-none flex-column align-items-center text-secondary text-decoration-none">
              <img src={message} alt="" />
              <span>Message</span>
            </a>
            <a href="#" className="d-md-flex d-none flex-column align-items-center text-secondary text-decoration-none">
              <img src={orders} alt="" />
              <span>Orders</span>
            </a>
            <a href="#" className="d-flex flex-column align-items-center text-secondary text-decoration-none">
              <img src={cart} alt="" />
              <span>Cart</span>
            </a>
          </div>
        </div>

        {/* Search input row for small screens */}
        <div className="d-md-none mb-3">
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control border border-primary"
              placeholder="Search products..."
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        {/* Desktop row: Logo left, Search center, Icons right */}
        <div className="d-none d-md-flex w-100 justify-content-between align-items-center">
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* Search input */}
          <div className="input-group mx-auto" style={{ maxWidth: "500px" }}>
            <input
              type="text"
              className="form-control border border-primary"
              placeholder="Search products..."
            />
            <button className="btn btn-primary">Search</button>
          </div>

          {/* Icons */}
          <div className="d-flex gap-3">
            <a href="#" className="d-flex flex-column align-items-center text-secondary text-decoration-none">
              <img src={profile} alt="" />
              <span>Profile</span>
            </a>
            <a href="#" className="d-flex flex-column align-items-center text-secondary text-decoration-none">
              <img src={message} alt="" />
              <span>Message</span>
            </a>
            <a href="#" className="d-flex flex-column align-items-center text-secondary text-decoration-none">
              <img src={orders} alt="" />
              <span>Orders</span>
            </a>
            <a href="#" className="d-flex flex-column align-items-center text-secondary text-decoration-none">
              <img src={cart} alt="" />
              <span>Cart</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainNavbar;






