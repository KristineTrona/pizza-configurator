import { LOAD_PIZZAS } from "../actions/pizza";


const initialState = {bases: [], sauces: [], toppings: [], base: "", sauce: "", topping: "", price: ""}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PIZZAS:
      return {...state, 
        bases: [...state.bases = action.payload.bases], 
        sauces: [...state.sauces = action.payload.sauces],
        toppings: [...state.toppings = action.payload.toppings] 
      }

    default:
      return state
  }
}

export default reducer