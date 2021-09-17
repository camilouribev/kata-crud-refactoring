import React, { useReducer, createContext } from "react";
import listReducer from "./reducers/ListReducer";
import todoReducer from "./reducers/TodoReducer";

const initialState = {
  todo: {
    list: { elements: [] },
    todo: { elements: [], item: {} },
    message: {},
  },
};
const Store = createContext(initialState);

const merge = { ...listReducer(), ...todoReducer() };
function reducer(state, action) {
  return merge[action.type] ? merge[action.type](state, action) : state;
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Todos los hijos tendrán acceso a dispatch y state
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StoreProvider };
