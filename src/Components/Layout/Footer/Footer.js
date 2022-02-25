import React from 'react'
import "./Footer.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Footer() {

  const cartQuantity = useSelector(state => state.cart.totalQuan);
  const show = useSelector((state) => state.pay.showPay);
  
 
  const history = useHistory();

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col f" onClick={() => history.push("/")}>
            <HomeRoundedIcon />
            <h6>HOME</h6>
          </div>
          <div className="col f">
            <SearchRoundedIcon />
            <h6>SEARCH</h6>
          </div>
          <div className="col f" onClick={() => history.push("/cart")}>
            <div className="count">
              <ShoppingBagRoundedIcon />
              {show && <div>{cartQuantity}</div>}
            </div>
            <h6>CART</h6>
          </div>
          <div className="col f">
            <PersonRoundedIcon />
            <h6>LOGIN</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
