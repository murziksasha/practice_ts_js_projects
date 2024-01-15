import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";



interface PropsCartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
}

function CartItem({ pizzaId, name, quantity, totalPrice }: PropsCartItem) {



  return (
    <li key={pizzaId}>
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center pb-2">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
