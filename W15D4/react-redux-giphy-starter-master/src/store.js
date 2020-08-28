// TODO: Import `createStore` from `redux`
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger"

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )
}







// TODO: Import middleware
// TODO: Import `rootReducer`

// TODO: Define a `configureStore` function

// TODO: Export the `configureStore` function
