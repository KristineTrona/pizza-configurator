import * as React from 'react'

export default function pizzaToppings (props){  
  if(!props.toppings)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-toppings-form">
      <ul> {props.toppings.map(topping =>
        <li key = {topping.title}>
          <input type= "checkbox"/>{topping.title}
        </li>)}
      </ul>  
    </form>)
    
}