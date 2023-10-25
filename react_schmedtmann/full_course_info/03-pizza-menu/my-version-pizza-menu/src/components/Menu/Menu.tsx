import { PizzaData } from '../../types/PizzaData';
import { Pizza } from '../Pizza';
import styles from './Menu.module.scss';

interface MenuProps { 
  data: PizzaData[];
}

export const Menu = ({ data }: MenuProps) => (
  <main className={styles.menu}>
    <h2>our menu</h2>
    {data.length > 0 && data.map(({name, ingredients, photoName, price, soldOut}, index) => (
      <Pizza
        key={index}
        pizzaName={name}
        ingredients={ingredients}
        photoName={photoName}
        price={price}
        soldOut={soldOut}
      />
    ))}
  </main>
);