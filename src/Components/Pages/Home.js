import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import './Home.css'
import Data from "../../get_shop.json";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Products from "../Products/Products";
import ToPay from "../Layout/ToPay/ToPay";
import { useSelector } from "react-redux";




export default function Home() {

  const show = useSelector((state) => state.pay.showPay);

  return (
    <div>
      <Header />
      <div className="home">
        <div className="shopImg">
          <img src={Data.GTS.shop_image} alt="shop_img" />
        </div>
        <div className="shop_name">
          <h3>{Data.GTS.shop_name}</h3>
          <h5>{Data.GTS.shop_description}</h5>
          <h6>
            {Data.GTS.shop_address} | {Data.GTS.shop_distance}
          </h6>
          <span className="shop_review">
            <StarRoundedIcon />
            <h6>{Data.GTS.shop_rating}</h6>
            <p>{Data.GTS.shop_message}</p>
          </span>
          <div className="offers">
            <div className="offer1">
              <span className="offer1_name">
                <LocalOfferIcon />
                <h6>WELCOME</h6>
              </span>
              <p>50% Offer</p>
            </div>
            <div className="offer2">
              <span className="offer2_name">
                <LocalOfferIcon />
                <h6>HAPPY</h6>
              </span>
              <p>50% Flat Offer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opt">
        <div className="opt1">
          <h5>Recommended</h5>
        </div>
        <div className="opt2">
          <h5>Fried Chicken</h5>
        </div>
      </div>
      <Products />
      {show && <ToPay />}
      <Footer />
    </div>
  );
}
