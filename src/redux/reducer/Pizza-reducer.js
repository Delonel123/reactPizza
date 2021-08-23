import axios from "axios"
import setPizza, { setLoadedActionCreator } from "../Action/PizzaActionCreator"

const initialState = {
    items:[],
    isLoaded: false
}

export const fetchPizza = (cortBy,categories) => (dispatch) =>{
    dispatch(setLoadedActionCreator(false))
    axios.get(`http://localhost:3001/pizzas?_sort=${cortBy}&_order=desc&${categories !== null ? `category=${categories}` : ''}`).then(resp => {
      dispatch(setPizza(resp.data))
    })
}

function pizzaReducer(state = initialState, action) {
    if (action.type === 'SET__PIZZAS') {
        return(
            {
                ...state,
                items:action.payload,
                isLoaded: true,
            }
        )
    }
    if (action.type === 'SET_LOADED') {
        return(
            {
                ...state,
                isLoaded: action.payload,
            }
        )
    }
    return state
}

export default pizzaReducer