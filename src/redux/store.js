import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { filterReducer } from "./reducer/Filter-reducer";
import pizzaReducer from "./reducer/Pizza-reducer";
import thunk from 'redux-thunk';
import {addPizza} from './reducer/AddPizza'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    pizzas: pizzaReducer,
    filter: filterReducer,
    addPizza
})

export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));

