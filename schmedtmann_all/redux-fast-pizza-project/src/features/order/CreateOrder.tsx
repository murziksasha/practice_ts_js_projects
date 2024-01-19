import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { fetchAddress, getUserName } from '../user/userSlice';
import { formatCurrency } from '../../utils/helpers';
import { createOrder } from '../../services/apiRestaurant';
import store, { AppDispatch } from '../../store';
import { useState } from 'react';
import { RootState } from '../../rootReducer';

interface PizzaItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

type Cart = PizzaItem[];

export interface IOrder {
  address: string;
  cart: Cart;
  customer: string;
  phone: string;
  priority?: string | undefined;
}

const parseCart = (cartString: string): Cart => {
  try {
    const parsedCart = JSON.parse(cartString) as Cart;
    // Add additional validation logic if needed
    return parsedCart;
  } catch (error) {
    console.error('Error parsing cart:', error);
    // Handle parsing error, e.g., return an empty array or throw an exception
    return [];
  }
};

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const dispatch = useDispatch<AppDispatch>();
  const [withPriority, setWithPriority] = useState(false);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const currentUserName = useSelector(getUserName);
  const {status: addressStatus, position, address, error: errorAddress} = useSelector((state: RootState) => state.user);
  const isLoadingAddress = addressStatus === 'loading';
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData() as IOrderErrors;



  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;

  function handleGeoLocation(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={currentUserName}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input" 
              type="text" 
              name="address" 
              disabled={isLoadingAddress}
              defaultValue={address}
              required />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          { !position.latitude && !position.longitude && (<span className="absolute right-[2.5px] z-50 top-[2.5px]">
              <Button type="small" 
              onClick={handleGeoLocation}
              disabled={isLoadingAddress}>
                Geo location
              </Button>
            </span>)
          }
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="mr-3 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority.toString()}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ? `${position.latitude},${position.longitude}`: ''} />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? 'Placing order... '
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

interface CustomRequest {
  formData: () => Promise<FormData>;
  // Add other properties/methods as needed
}

interface IOrderErrors {
  phone?: string;
  // Add other error properties as needed
}

export async function action({ request }: { request: CustomRequest }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order: IOrder = {
    ...data,
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    cart: parseCart(data.cart as string), // Use the parseCart function
    priority: data.priority === 'true' ? 'true' : undefined,
  };

  const errors: IOrderErrors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  //if everything ok - create new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
