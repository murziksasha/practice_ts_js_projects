import styles from './Pizza.module.scss';

interface PizzaProps { }

export const Pizza = ({ }: PizzaProps) => (
  <div className={styles.Pizza} data-testid="Pizza">
    Pizza Component
  </div>
);
