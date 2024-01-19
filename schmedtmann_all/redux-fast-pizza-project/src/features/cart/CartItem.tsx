import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";



interface PropsCartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
}

function CartItem({ pizzaId, name, quantity, totalPrice }: PropsCartItem) {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));


  return (
    <li key={pizzaId}>
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center pb-2">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
