// TODO: Import `createStore` from `redux`
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer"

export default function configureStore(initialState) {
    createStore({
        rootReducer,
        initialState,
    })
}







// TODO: Import middleware
// TODO: Import `rootReducer`

// TODO: Define a `configureStore` function

// TODO: Export the `configureStore` function
