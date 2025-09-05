import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer called", action.data);
      return [...data, action.data];

    case REMOVE_FROM_CART:
      return data.filter((item: any) => item.name !== action.data.name);

    default:
      return data;
  }
};
