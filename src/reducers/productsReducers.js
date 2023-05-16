import { products } from "../data/data";
export const initialState = {
  products,
};

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case value: {
      return {};
    }

    default:
      break;
  }
};
