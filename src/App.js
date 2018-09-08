import React, { Component } from 'react';
import './App.css';
import PizzaContainer from './components/PizzaContainer'
import orderDetails from './components/OrderDetails'
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={PizzaContainer} />
        <Route exact path='/order-complete' component={orderDetails} />
      </div>
    );
  }
}

export default App;
