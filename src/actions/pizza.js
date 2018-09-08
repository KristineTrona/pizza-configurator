import {base, sauce, toppings} from '../lib/pizzaData'


export const LOAD_PIZZAS = "LOAD_PIZZAS"

export function loadPizzas() {
    return {
      type: LOAD_PIZZAS,
      payload: {
          bases: base, 
          sauces: sauce,
          toppings: toppings}
  }
}