import * as React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {newOrder} from '../actions/pizza'

class orderDetails extends React.Component{ 


  updatePizzaCost = () => {
    const totalCost = this.props.pizza.priceBase + this.props.pizza.priceSauce 
    + this.props.pizza.priceToppings + this.props.pizza.priceDelivery
    return totalCost.toFixed(2)
  }

  startNewOrder = () =>{
    this.props.newOrder()
  }

  render(){
    return (
      <div className = "order-details">
        <h1>Thank you for choosing NewAgePizza.</h1>
        <h2>Your pizza is on it's way!</h2>
        <h3>Your order details:</h3>
          <p> Size: {this.props.pizza.base} </p>
          <p> Sauce: {this.props.pizza.sauce}</p>
          <p> Toppings: </p> <ul> {this.props.pizza.selectedToppings
            .map(topping => <li key = {topping}>{topping}</li>)}</ul>
          <p>Total cost: {this.updatePizzaCost()}	&euro;</p>
        <Link to= {"/"}><button onClick={this.startNewOrder}>New order</button></Link>
      </div>)
  }
}


const mapStateToProps = (state) => ({
  pizza: state.pizza
})

export default connect(mapStateToProps, {newOrder})(orderDetails)