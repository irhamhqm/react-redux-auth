import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const baseUrl = 'https://basic-auth-example.herokuapp.com';

const store = createStore(userReducer,
composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrl)))
);

export default store;
