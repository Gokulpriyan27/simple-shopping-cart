import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import { CartReducer } from "./Reducer";

const CartContext = createContext();

const data = [
  {
    id: 1,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Fancy Product",
    stars: 0,
    oldPrice: "$80.00",
    NewPrice: "$40.00",
    inCart: false,
  },
  {
    id: 2,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Special Item",
    sale: "Yes",
    stars: 5,
    oldPrice: "$20.00",
    NewPrice: "$18.00",
    inCart: false,
  },
  {
    id: 3,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Sale Item",
    sale: "Yes",
    stars: 0,
    oldPrice: "$50.00",
    NewPrice: "$25.00",
    inCart: false,
  },
  {
    id: 4,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Popular Item",
    stars: 5,
    oldPrice: "",
    NewPrice: "$25.00",
    inCart: false,
  },
  {
    id: 5,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Sale Item",
    sale: "Yes",
    stars: 5,
    oldPrice: "$50.00",
    NewPrice: "$25.00",
    inCart: false,
  },
  {
    id: 6,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Fancy Product",
    stars: 5,
    oldPrice: "$280.00",
    NewPrice: "120.00",
    inCart: false,
  },
  {
    id: 7,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Special Item",
    sale: "Yes",
    stars: 5,
    oldPrice: "$20.00",
    NewPrice: "$18.00",
    inCart: false,
  },
  {
    id: 8,
    img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Popular Item",
    stars: 5,
    oldPrice: "",
    NewPrice: "$40.00",
    inCart: false,
  },
];

function Context({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    data: data,
    cart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
