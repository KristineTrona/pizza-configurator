import * as React from 'react'
import { Link } from 'react-router-dom'

export default function orderDetails(props){ 
  return (
    <div className = "order-details">
    <h1>Thank you for choosing NewAgePizza.</h1>
    <h2>Your pizza is on it's way!</h2>
      <h3>Your order details:</h3>
        <p> Size: </p>
        <p> Sauce: </p>
        <p> Toppings: </p>
        <p>Total cost: 	&euro;</p>
        <Link to= {"/"}><button>New order</button></Link>
    </div>)
}