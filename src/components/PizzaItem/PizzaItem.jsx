import {useDispatch} from 'react-redux';


function PizzaItem({pizza}) {
 const dispatch = useDispatch();

  const addPizza = () => {      
    
    dispatch({
      // action.type
      type: 'ADD_PIZZA',
      // action.payload
      payload: {
        pizzaName: pizza.name, 
        pizzaDescription: pizza.description,
        pizzaPrice: pizza.price
      }
     
    });
  }


  return (
  <>
    <li> {pizza.name} {pizza.description} {pizza.price} </li>
    <button onClick={addPizza}>Add pizza</button>
  </>
  )

}




export default PizzaItem;