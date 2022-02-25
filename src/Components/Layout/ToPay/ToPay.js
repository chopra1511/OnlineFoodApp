import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ToPay.css'

export default function ToPay(props) {
    const total = useSelector((state) => state.cart.items);
    const tA = total.map((tp) => tp.totalPrice);
    const topay = tA.reduce((cur,total) => {
      return cur = +cur + +total;
    },0)
    const history = useHistory();
    console.log(tA);
  return (
    <div className="pay">
      <h6>To Pay Rs.{topay}</h6>
      <Button onClick={() => history.push("/cart")}>Continue</Button>
    </div>
  );
}
