import logo from '../../assets/Home/logo.png';
import profile from '../../assets/Home/profile.png';
import message from '../../assets/Home/message.png';
import orders from '../../assets/Home/heart.png';
import cart from '../../assets/Home/cart.png';





function MainNavbar() {
  return (
    <div className="py-3 border-bottom ">
      <div className="container-lg d-flex align-items-center justify-content-between">
        
        {/* Logo */}
       <img src={logo} alt="logo" />

        {/* Search */}
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
          />
          <button className="btn btn-primary">Search</button>
        </div>

        {/* Icons */}
        <div className="d-flex gap-3">
         <a href="#" className='d-flex flex-column align-items-center justify-content-center text-decoration-none text-secondary'><img src={profile} alt="" /><span>Profile</span></a>
         <a href="#" className='d-flex flex-column align-items-center justify-content-center text-decoration-none text-secondary'><img src={message} alt="" /><span>Message</span></a>
         <a href="#" className='d-flex flex-column align-items-center justify-content-center text-decoration-none text-secondary'><img src={orders} alt="" /><span>Orders</span></a>
         <a href="#" className='d-flex flex-column align-items-center justify-content-center text-decoration-none text-secondary'><img src={cart} alt="" /><span>Cart</span></a>
      

        </div>

      </div>
    </div>
  );
}

export default MainNavbar;
