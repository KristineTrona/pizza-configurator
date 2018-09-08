import {base, sauce, toppings} from '../lib/pizzaData'


export const LOAD_PIZZAS = "LOAD_PIZZAS"
export const SELECT_BASE = "SELECT_BASE"
export const SELECT_SAUCE = "SELECT_SAUCE"
export const UPDATE_COST_BASE = "UPDATE_COST_BASE"
export const UPDATE_COST_SAUCE = "UPDATE_COST_SAUCE"

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

export function updateCostBase(basePrice) {
  return {
    type: UPDATE_COST_BASE,
    payload: basePrice
  }
}

export function selectSauce(souce) {
  return {
    type: SELECT_BASE,
    payload: souce
  }
}

export function updateCostSauce(saucePrice) {
  return {
    type: UPDATE_COST_SAUCE,
    payload: saucePrice
  }
}