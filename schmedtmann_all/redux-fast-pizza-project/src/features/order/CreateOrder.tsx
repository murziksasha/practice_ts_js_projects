import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
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

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const userName = useSelector((state: RootState) => state.user.userName);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData() as IOrderErrors;

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={userName} required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="mr-3 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Placing order... ' : 'Order now'}
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
    priority: data.priority === 'on' ? 'on' : undefined,
  };

  const errors: IOrderErrors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  //if everything ok - create new order and redirect
  // const newOrder = await createOrder(order);

  // return redirect(`/order/${newOrder.id}`);
  return null;
}

export default CreateOrder;
