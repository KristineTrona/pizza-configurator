import * as React from 'react'

export default function pizzaToppings (props){  
  if(!props.toppings)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-toppings-form" onSubmit={props.onSubmit}>
      
      <div className = "topping-1">
        <label htmlFor="topping-selector-1">Topping 1 :</label>
          <select id = "topping-selector-1" name="topping1" onChange={props.onChange}>
            <option key="topping1" value = ""> Select topping</option>
            {props.toppings.map(topping => <option key= {`${topping.title}-1`} value={topping.title}>{topping.title} 	&euro; {0.50.toFixed(2)} </option>)}
          </select>
      </div>

      <div className = "topping-2">
        <label htmlFor="topping-selector-2">Topping 2 :</label>
          <select id = "topping-selector-2" name="topping2" onChange={props.onChange}>
            <option key="topping2" value = ""> Select topping</option>
            {props.toppings.map(topping => <option key= {`${topping.title}-2`} value={topping.title}>{topping.title} 	&euro; {0.50.toFixed(2)} </option>)}
          </select>
      </div>

      <div className = "topping-3">
        <label htmlFor="topping-selector-3">Topping 3 :</label>
          <select id = "topping-selector-3" name="topping3" onChange={props.onChange}>
            <option key="topping3" value = ""> Select topping</option>
            {props.toppings.map(topping => <option key= {`${topping.title}-3`}value={topping.title}>{topping.title} 	&euro; {0.50.toFixed(2)} </option>)}
          </select>
        </div>
        <button type = "submit">Submit Pizza</button>
    </form>)
    
}