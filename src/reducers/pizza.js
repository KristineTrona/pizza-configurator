import { LOAD_PIZZAS, SELECT_BASE, SELECT_TOPPINGS, UPDATE_COST_BASE, UPDATE_COST_SAUCE, UPDATE_COST_TOPPINGS } from "../actions/pizza";


const initialState = {bases: [], sauces: [], toppings: [], base: "", sauce: "", topping: "", priceBase: 0, priceSauce: 0, priceToppings: 0}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PIZZAS:
      return {...state, 
        bases: [...state.bases = action.payload.bases], 
        sauces: [...state.sauces = action.payload.sauces],
        toppings: [...state.toppings = action.payload.toppings] 
      }
    case SELECT_BASE:
      return {...state,
        base: action.payload
      }
    case UPDATE_COST_BASE:
      return {...state,
        priceBase: action.payload
      }
    case UPDATE_COST_SAUCE:
      return {...state,
        priceSauce: action.payload
      }
    case SELECT_TOPPINGS:
      return {
        ...state,
        topping: action.payload
      }
    case UPDATE_COST_TOPPINGS:
      return {
        ...state,
        priceToppings: action.payload
      }
    default:
      return state
  }
}

export default reducer