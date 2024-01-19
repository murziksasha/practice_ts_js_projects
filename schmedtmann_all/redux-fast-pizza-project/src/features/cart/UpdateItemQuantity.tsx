

import React from 'react'
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

interface IPropsUpdateItemQuantity {
  pizzaId: number;
  currentQuantity: number;
}

export default function UpdateItemQuantity({pizzaId, currentQuantity}: IPropsUpdateItemQuantity) {
  const dispatch = useDispatch();
  

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type='round' onClick={handleDecreaseQuantity}>-</Button>
      <span className='font-medium'>{currentQuantity}</span>
      <Button type='round' onClick={handleIncreaseQuantity}>+</Button>
    </div>
  );
}
