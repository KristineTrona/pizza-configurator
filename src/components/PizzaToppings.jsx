import * as React from 'react'

export default function pizzaToppings (props){  
  if(!props.toppings)
    return <h1>Loading...</h1>
  return (
    <form className = "pizza-toppings-form" onSubmit={props.onSubmit}>
      
      <div className = "topping-1">
        <select className = "select-dropdown" id = "topping-selector-1" name="topping1" onChange={props.onChange}>
          <option key="topping1" value = ""> Select a topping</option>
          {props.toppings.map(topping => <option key= {`${topping.title}-1`} value={topping.title}>{topping.title} 	&euro; {0.50.toFixed(2)} </option>)}
        </select>
      </div>

      <div className = "topping-2">
      <select className = "select-dropdown" id = "topping-selector-2" name="topping2" onChange={props.onChange}>
        <option key="topping2" value = ""> Select a topping</option>
        {props.toppings.map(topping => <option key= {`${topping.title}-2`} value={topping.title}>{topping.title} 	&euro; {0.50.toFixed(2)} </option>)}
      </select>
      </div>

      <div className = "topping-3">
        <select className = "select-dropdown" id = "topping-selector-3" name="topping3" onChange={props.onChange}>
          <option key="topping3" value = ""> Select a topping</option>
          {props.toppings.map(topping => <option key= {`${topping.title}-3`}value={topping.title}>{topping.title} 	&euro; {0.50.toFixed(2)} </option>)}
        </select>
      </div>
      <button type = "submit" className = "submit-pizza">Submit Pizza</button>
    </form>)
    
}