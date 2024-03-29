import styles from './Pizza.module.scss';

interface PizzaProps { 
  pizzaName: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean
}

export const Pizza = ({pizzaName, ingredients, photoName, price, soldOut }: PizzaProps) => (
  <div className={styles.pizza}>
    <img src={`../../${photoName}`} alt={pizzaName} />
    <h3>{pizzaName}</h3>
    <p>{ingredients}</p>
    <span>{!soldOut ? price + '  $' : 'SOLD OUT'}</span>
  </div>
);
