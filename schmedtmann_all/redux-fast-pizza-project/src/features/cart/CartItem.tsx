import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";



interface PropsCartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
}

function CartItem({ pizzaId, name, quantity, totalPrice }: PropsCartItem) {

  return (
    <li>
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center pb-2">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type='small'>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
