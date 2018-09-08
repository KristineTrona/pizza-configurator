import {base, sauce, toppings} from '../lib/pizzaData'


export const LOAD_PIZZAS = "LOAD_PIZZAS"
export const SELECT_BASE = "SELECT_BASE"
export const UPDATE_COST = "UPDATE_COST"

export function loadPizzas() {
    return {
      type: LOAD_PIZZAS,
      payload: {
          bases: base, 
          sauces: sauce,
          toppings: toppings}
  }
}

export function selectBase(base) {
  return {
    type: SELECT_BASE,
    payload: base
  }
}

export function updateCost(price) {
  return {
    type: UPDATE_COST,
    payload: price
  }
}