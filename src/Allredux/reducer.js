import { ADD_TODO, NOT_COMPLETED_TODO, SINGLE_TODO } from "./actiontypes";

export const reduceFn = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...payload],
      };
    case SINGLE_TODO:
      return {
        ...state,
        single: [payload],
      };
    case NOT_COMPLETED_TODO:
      return {
        ...state,
        notcompltd: [...payload],
      };
    default:
      return { ...state };
  }
};
