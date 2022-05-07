import { legacy_createStore as createStore, combineReducers } from "redux";
import { productReducer } from "./ProductData/reducer";
import { loginReducer } from "./Login/loginReducer";
const rootReducer = combineReducers({
  productData: productReducer,
  loginData: loginReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
