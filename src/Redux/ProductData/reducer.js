import { PRODUCT_DATA } from "./actions";

const init = {
  data: [],
};

export const productReducer = (store = init, { type, payload }) => {
  switch (type) {
    case PRODUCT_DATA:
      return { ...store, data: payload };
    default:
      return store;
  }
};
