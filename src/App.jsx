import React from 'react';
import Navbar from "./components/Navbar";
import  Footer from "./components/Footer";
import Filtering from "./components/Filter";

import { useState ,  createContext } from "react";



export const CartContext = createContext();


const App = () => {
  const [sortType, setSortType] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} setSortType={setSortType} />
      <Filtering sortType={sortType} search={search} />
      <Footer />
    </>
  );
};

export default App;