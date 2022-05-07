
import { LOGIN } from "./action";

const initialState = { user: localStorage.getItem("userLoginDetails") || false };

export const loginReducer = (store = initialState, { type, payload }) => {
  console.log(payload)
    switch (type) {
   // add your login reducer functionalities here
        case LOGIN:
            localStorage.setItem("userLoginDetails", payload)
            return { ...store, user: payload }
        default:
            return store;
    }  
}