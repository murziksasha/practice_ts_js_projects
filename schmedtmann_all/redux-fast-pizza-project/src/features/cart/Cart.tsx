import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.userName);
  const cart = useSelector(getCart); 

  function handleClearCart() {
    dispatch(clearCart());
  }

  if(!cart.length) return <EmptyCart/>

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>

        <ul className='divide-y divide-stone-200 border-b mt-3'>
          {cart.map((item) => (
            <CartItem {...item} key={item.pizzaId}/>
          ))}
        </ul>
        <div className='mt-6 flex gap-5'>
          <Button type='primary' to="/order/new">Order pizzas</Button>
          <Button type='secondary' onClick={handleClearCart}>Clear cart</Button>
        </div>
    </div>
  );
}

export default Cart;
