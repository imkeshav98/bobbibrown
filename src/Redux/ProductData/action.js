export const PRODUCT_DATA = "PRODUCT_DATA";

// Action Creator
export const handleData = (data) => {
  return {
    type: PRODUCT_DATA,
    payload: data,
  };
};
