import { formatCurrency } from "../../utils/helpers";


type Item = {
  quantity: number;
  name: string;
  totalPrice: number;
}

interface PropsOrderItem {
  item: Item, 
  isLoadingIngredients: boolean;
  ingredients: string;
}


function OrderItem({ item, isLoadingIngredients, ingredients }: PropsOrderItem) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
