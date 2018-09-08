import * as React from 'react'

export default function pizzaBase (props){ 
  if(!props.bases)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-base-form" onSubmitBase={props.onSubmitBase}>
      <label htmlFor="base-selector">Choose your pizza size:</label>
        <select id = "base-selector" name="base" onChange={props.onChange}>
          <option value = ""> Select size</option>
          {props.bases.map(base => <option value={base.title}>{base.title} 	&euro; {base.price.toFixed(2)}</option>)}
          </select>
        <button type = "submit">Submit</button>
    </form>)     
}