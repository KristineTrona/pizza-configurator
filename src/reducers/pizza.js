import { LOAD_PIZZAS, SELECT_BASE, UPDATE_COST } from "../actions/pizza";


const initialState = {bases: [], sauces: [], toppings: [], base: "", sauce: "", topping: "", price: 0}

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
    case UPDATE_COST:
      return {...state,
        price: action.payload
      }
    default:
      return state
  }
}

export default reducer