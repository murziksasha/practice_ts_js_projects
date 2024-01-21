import React from 'react'
import Button from '../../ui/Button'
import { MyOrder } from './Order';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

interface IProps {
  order: MyOrder;
}

export default function UpdateOrder({}: IProps) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type='primary'>Make Priority</Button>
    </fetcher.Form>
  )
}

export async function action({request, params}: any){
  const data = {priority: true};
  await updateOrder(params.orderId, data);
  return null;
}
