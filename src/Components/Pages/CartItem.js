import React from 'react'
import './CartItem.css'
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../Store/cartSlice';

export default function CartItem(props) {
    const {name, quantity, total, price, id} = props.item;

    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(cartAction.addItem({
            id,
            name,
            price,
        }));
    }

    const removeItemHandler = () => {
        dispatch(cartAction.removeItem(id));
    }

  return (
    <div className="cart_Item">
      <div className="details">
        <h5>{name}</h5>
        <CircleIcon />
      </div>
      <div className="total_details">
        <div>
          <h4>Rs.{total}</h4>
          <p>
            Rs.{price} x {quantity}
          </p>
        </div>
        <div className="more">
          <Button onClick={removeItemHandler}>-</Button>
          <Button onClick={addItemHandler}>+</Button>
        </div>
      </div>
    </div>
  );
}
