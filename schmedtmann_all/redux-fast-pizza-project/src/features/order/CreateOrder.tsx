import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

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
    console.error("Error parsing cart:", error);
    // Handle parsing error, e.g., return an empty array or throw an exception
    return [];
  }
};

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData() as IOrderErrors ;

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)}/>
          <button disabled={isSubmitting}>{isSubmitting ? 'Placing order... ': 'Order now'}</button>
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
    priority: data.priority === 'on' ? 'on' : undefined
  };

  const errors: IOrderErrors = {};
  if(!isValidPhone(order.phone)) errors.phone = 'Please give us your correct phone number. We might need it to contact you.';

  if(Object.keys(errors).length > 0) return errors;

  //if everything ok - create new order and redirect
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
