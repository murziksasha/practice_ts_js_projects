// Test ID: IIDSAT
import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant.js';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers.js';
import OrderItem, { OrderItemType } from './OrderItem.js';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder.js';

export interface MyOrder {
  id: string;
  status: boolean;
  priority: string;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: OrderItemType[];
}

function Order() {
  const order = useLoaderData() as MyOrder;

  const fetcher = useFetcher();

  useEffect(() => {
    if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);


  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-6 py-6">
      <div className="flex items-center justify-between gap-12">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="flex items-center gap-4">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item: OrderItemType, i: number) => 
          {
           return (<OrderItem item={item} key={i} isLoadingIngredients={fetcher.state === 'loading'} 
           //@ts-ignore
           ingredients={fetcher?.data?.find((el: OrderItemType)=>el.id === item.pizzaId)?.ingredients ?? []}
            />)
          }
        )}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold text-stone-600">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order}/>}
    </div>
  );
}

export async function loader({ params }: any) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
