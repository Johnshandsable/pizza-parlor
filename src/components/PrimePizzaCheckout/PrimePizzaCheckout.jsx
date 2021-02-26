import axios from 'axios';
import { useSelector } from 'react-redux';

function PrimePizzaCheckout() {
  const getOrder = useSelector((store) => {
    return store.pizzaReducer;
  });

  const getCustomerInfo = useSelector((store) => {
    return store.customerInfoReducer;
  });

  const onSubmit = () => {
    console.log('onSubmit()');

    const customerInfo = { getCustomerInfo };
    const orderInfo = { getOrder };

    axios
      .post('/api/order', {
        customer_name: customerInfo.name,
        street_address: customerInfo.address,
        city: customerInfo.city,
        zip: customerInfo.zip,
        type: customerInfo.deliveryOption,
        total: '9.99',
        pizzas: orderInfo, // An array of pizzas
      })
      .then((res) => {
        console.log('CLIENT - POST - a response occurred', res);
      })
      .catch((err) => {
        console.log('CLIENT - POST - an error occurred', err);
      });
  };

  return (
    <div>
      <ul>
        {getOrder.map((order) => {
          return <li>order</li>;
        })}
      </ul>
      <button onClick={onSubmit}>Submit Order</button>
    </div>
  );
}

export default PrimePizzaCheckout;
