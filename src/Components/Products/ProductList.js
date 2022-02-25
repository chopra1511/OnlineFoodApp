import React, { Fragment } from 'react'
import './ProductList.css'
import { Button } from '@mui/material'
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch } from 'react-redux';
import { toPayAction } from '../../Store/toPaySlice';
import { cartAction } from '../../Store/cartSlice';



export default function ProductList({name,image,price,id}) {
  
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(toPayAction.show());
    dispatch(cartAction.addItem({
      name,
      id,
      price,
    }))
  };

  return (
    <Fragment>
      <div className="products">
        <div className="image">
          <img src={image} alt="item" />
        </div>
        <div className="product_content">
          <h4>{name}</h4>
          <h5>
            <CircleIcon /> Rs.{price}
          </h5>
        </div>
        <div className="add_item">
          <Button onClick={addHandler}>+ ADD</Button>
        </div>
      </div>
    </Fragment>
  );
}
