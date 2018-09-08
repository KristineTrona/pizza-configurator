import * as React from 'react'

export default function pizzaSauce (props){  
  if(!props.sauces)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-sauce-form">
      <ul> {props.sauces.map(sauce =>
        <li key = {sauce.title}>
          <input type= "checkbox"/>{sauce.title}
        </li>)}
      </ul>  
    </form>)
}