import axios from "axios";
import React, { createContext, useContext } from "react";
import { API } from "../helpers/const";

const productcontext = createContext();
export const useProductcontext = () => useContext(productcontext);

const Productcontext = ({ children }) => {
  async function createFood(newDish) {
    await axios.post(API, newDish);
  }
  const values = {
    createFood,
  };

  return (
    <productcontext.Provider value={values}>
      {children}{" "}
    </productcontext.Provider>
  );
};

export default Productcontext;
