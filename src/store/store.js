import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import { favsReducer } from "../reducers/favs.reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    favs: favsReducer,
});


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);