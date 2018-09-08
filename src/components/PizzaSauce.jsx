import * as React from 'react'

export default function pizzaSauce (props){  
  if(!props.sauces)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-sauce-form" onSubmitBase={props.onSubmitBase}>
      <label htmlFor="sauce-selector">Choose a sauce:</label>
        <select id = "sauce-selector" name="sauce" onChange={props.onChange}>
          <option value = ""> Select sauce</option>
          {props.sauces.map(sauce => <option value={sauce.title}>{sauce.title} 	&euro; {sauce.price.toFixed(2)}</option>)}
          </select>
        <button type = "submit">Submit</button>
    </form>)
}