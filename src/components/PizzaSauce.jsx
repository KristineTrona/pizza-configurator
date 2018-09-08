import * as React from 'react'

export default function pizzaSauce (props){  
  if(!props.sauces)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-sauce-form" onSubmit={props.onSubmitSauce}>
      <label htmlFor="sauce-selector">Choose a sauce:</label>
        <select id = "sauce-selector" name="sauce" onChange={props.onChange}>
          <option key = "" value = ""> Select sauce</option>
          {props.sauces.map(sauce => <option key = {sauce.title} value={sauce.title}>{sauce.title} 	&euro; {sauce.price.toFixed(2)}</option>)}
          </select>
        <button type = "submit">Submit</button>
    </form>)
}