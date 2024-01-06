import { formatCurrency } from "../../utils/helpers";

type MenuItemProps = {
  id: number;
  name: string; 
  unitPrice: number; 
  ingredients: string[]; 
  soldOut: boolean; 
  imageUrl: string;
}

function MenuItem({ id, name, unitPrice, ingredients, soldOut, imageUrl }: MenuItemProps) {

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
