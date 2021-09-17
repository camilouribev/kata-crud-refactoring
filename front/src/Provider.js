import React, { useReducer, createContext } from "react";
import reducer from "./reducers/TodoReducer";

const initialState = {
  todo: { list: [], item: {} },
};
const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Todos los hijos tendrán acceso a dispatch y state
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StoreProvider };
