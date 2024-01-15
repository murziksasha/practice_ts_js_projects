

import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice';

interface IPropsDeleteItem{
  pizzaId: number;
}

export default function DeleteItem({pizzaId}: IPropsDeleteItem) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId))
  }


  return (
    <Button type='small' onClick={handleDelete}>Delete</Button>
  )
}
