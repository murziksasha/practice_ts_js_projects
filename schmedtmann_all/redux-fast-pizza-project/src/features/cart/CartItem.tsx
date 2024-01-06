import { formatCurrency } from "../../utils/helpers";



interface PropsCartItem {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
}

function CartItem({ pizzaId, name, quantity, totalPrice }: PropsCartItem) {

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
