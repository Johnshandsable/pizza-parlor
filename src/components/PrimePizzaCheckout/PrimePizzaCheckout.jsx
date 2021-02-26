import axios from 'axios';
import {useSelector } from 'react-redux';

function PrimePizzaCheckout() {
  /*
  Display order, have a button for submitting the order to POST 
  */

  const getOrder = useSelector((store) => {
    return store.pizzaReducer;
  });

  const onSubmit = () => {
    console.log('onSubmit()');

    axios.post('')
  }

  return(
  <div>
    <ul>
      {getOrder.map(order) => {
        return <li>order</li>
      }}
    </ul>
    <button onClick={onSubmit}>Submit Order</button>
  </div>
  )
}

export default PrimePizzaCheckout;