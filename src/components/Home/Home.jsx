import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  let [pizzaList, setPizzaList] = useState({});

  //On Load, call server
  useEffect(() => {
    console.log('in useEffect');
    getPizza();
  }, []);

  const getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza',
    })
      .then((response) => {
        dispatch({ type: 'SET_PIZZA_LIST', payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <H2> List of pizza : {pizzaList}</H2>;
}
export default Home;