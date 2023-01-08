import { createContext, useState } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, SetCart] = useState([]);
  return (<Cart.Provider value={{ cart, SetCart }}>{children}</Cart.Provider>);
};

export default Context;
