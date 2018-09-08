import {base, sauce, toppings} from '../lib/pizzaData'


export const LOAD_PIZZAS = "LOAD_PIZZAS"
export const SELECT_BASE = "SELECT_BASE"
export const SELECT_SAUCE = "SELECT_SAUCE"
export const SELECT_TOPPINGS = "SELECT_TOPPINGS"
export const UPDATE_COST_BASE = "UPDATE_COST_BASE"
export const UPDATE_COST_SAUCE = "UPDATE_COST_SAUCE"
export const UPDATE_COST_TOPPINGS = "UPDATE_COST_TOPPINGS"
export const ADD_TURBO_DELIVERY = "ADD_TURBO_DELIVERY"

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

export function selectSauce(sauce) {
  return {
    type: SELECT_SAUCE,
    payload: sauce
  }
}

export function updateCostSauce(saucePrice) {
  return {
    type: UPDATE_COST_SAUCE,
    payload: saucePrice
  }
}

export function selectToppings(toppings) {
  return {
    type: SELECT_TOPPINGS,
    payload: toppings
  }
}

export function updateCostToppings(numberOfToppings) {
  return {
    type: UPDATE_COST_TOPPINGS,
    payload: numberOfToppings * 0.50.toFixed(2)
  }
}

export function addTurboDelivery(checkbox) {
  return {
    type: ADD_TURBO_DELIVERY,
    payload: checkbox
  }
}