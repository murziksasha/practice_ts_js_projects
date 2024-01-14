import { formatCurrency } from '../../utils/helpers';

export type OrderItemType = {
  id: string;
  quantity: number;
  name: string;
  totalPrice: number;
};

interface PropsOrderItem {
  item: OrderItemType;
  isLoadingIngredients?: boolean;
}

function OrderItem({ item, isLoadingIngredients }: PropsOrderItem) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className='flex items-center justify-between gap-4 text-sm'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </p>
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
