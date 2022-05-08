import { LOGIN } from "./action";

const initialState = false;

export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    // add your login reducer functionalities here
    case LOGIN:
      localStorage.setItem("userLoginDetails", payload);
      return { ...store, payload };
    default:
      return store;
  }
};
