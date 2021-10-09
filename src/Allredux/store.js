import { createStore } from "redux";
import { reduceFn } from "./reducer";

const initialState = {
  todo: [],
  single: [],
  notcompltd: [],
};

export const store = createStore(reduceFn, initialState);
