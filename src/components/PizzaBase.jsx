import * as React from 'react'

export default function pizzaBase (props){ 
  if(!props.bases)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-base-form" onSubmit={props.onSubmitBase}>
      <label htmlFor="base-selector">Choose your pizza size:</label><br/>
        <select className = "select-dropdown" id = "base-selector" name="base" onChange={props.onChange}>
          <option key = "" value = ""> Select size</option>
            {props.bases.map(base => <option key = {base.title} value={base.title}>
            {base.title}	&euro; {base.price.toFixed(2)}</option>)}
          </select>
    </form>)     
}