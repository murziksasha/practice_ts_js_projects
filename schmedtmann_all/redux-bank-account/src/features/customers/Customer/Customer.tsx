import { useSelector } from 'react-redux';
import styles from './Customer.module.scss';
import { RootState } from '../../../components/redux/store';

interface CustomerProps {}

export const Customer = ({}: CustomerProps) => {
  const customer = useSelector((store: RootState) => store.customer);

  return <h2>👋 Welcome, {customer.fullName}</h2>;
};