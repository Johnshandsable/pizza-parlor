import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
import PrimePizzaForm from '../PrimePizzaForm/PrimePizzaForm';
import PrimePizzaCheckout from '../PrimePizzaCheckout/PrimePizzaCheckout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              {/*  */}
              <Link to="/prime-pizza-form">PIZZA FORM</Link>
            </li>
            <li>
              <Link to="/customer-info-form">CUSTOMER INFO FORM</Link>
            </li>
          </ul>
        </nav>
        <Route path="/prime-pizza-form">
          <PrimePizzaForm />
        </Route>
        <Route path="/customer-info-form">
          <CustomerInfoForm />
        </Route>
        <Route path="/prime-pizza-checkout">
          <PrimePizzaCheckout />
        </Route>
      </Router>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
