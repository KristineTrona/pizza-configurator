import * as React from 'react'

export default function pizzaBase (props){ 
  if(!props.bases)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-base-form">
      <ul> {props.bases.map(base =>
        <li key = {base.title}>
          <input type= "checkbox"/>{base.title}
        </li>)}
      </ul>
    </form>)     
}