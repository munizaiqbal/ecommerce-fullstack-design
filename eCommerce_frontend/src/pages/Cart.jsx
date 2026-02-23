import React from 'react'
import MainNavbar from "../components/Home/MainNavbar";
import OrderSummary from '../components/Cart/OrderSummary'
import OrderDetails from '../components/Cart/OrderDetails'
import products from '../data/products'
import {useState} from 'react'
function Cart() {
   const [cartItems, setCartItems] = useState([
    products[0],
    products[1],
  ]);
  return (
    <div className="container-xxl">
    <MainNavbar showSearch={false}  />
<h2 className="my-4">My Cart</h2>
<div className="row">
<OrderDetails cartItems={cartItems} setCartItems={setCartItems} />

<OrderSummary cartItems={cartItems} />
</div>
    </div>   
  )
}

export default Cart