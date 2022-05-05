import { legacy_createStore as createStore, combineReducers } from "redux";
import { productReducer } from "./ProductData/reducer";

const rootReducer = combineReducers({
  productData: productReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
