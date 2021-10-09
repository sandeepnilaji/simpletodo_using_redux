import { ADD_TODO, SINGLE_TODO, NOT_COMPLETED_TODO } from "./actiontypes";

export const addtodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
export const singletodo = (data) => {
  return {
    type: SINGLE_TODO,
    payload: data,
  };
};

export const notcomptodo = (data) => {
  return {
    type: NOT_COMPLETED_TODO,
    payload: data,
  };
};
