import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Data from "../../get_shop.json";
import './Cart.css'
import ToPay from '../Layout/ToPay/ToPay'
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart(props) {

  const show = useSelector((state) => state.pay.showPay);
  const cartQuan = useSelector((state) => state.cart.totalQuan);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <Header />
      <div className="home cart">
        <div className="shopImg">
          <img src={Data.GTS.shop_image} alt="shop_img" />
        </div>
        <div className="shop_name">
          <h3>{Data.GTS.shop_name}</h3>
          <h5>{Data.GTS.shop_description}</h5>
          <h6>
            {Data.GTS.shop_address} | {Data.GTS.shop_distance}
          </h6>
        </div>
      </div>
      <div className="cartItem">
        <div className="items">
          <h4>Items in Cart</h4>
        </div>
        <div className="total_items">
          <h4>{cartQuan} Items</h4>
        </div>
      </div>
      {cartItems.map((items) => (
        <CartItem
          key={items.id}
          item={{
            id: items.id,
            name: items.name,
            quantity: items.quantity,
            total: items.totalPrice,
            price: items.price,
          }}
        />
      ))}
      {show && <ToPay />}
      <Footer />
    </div>
  );
}
