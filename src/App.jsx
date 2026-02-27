import React from 'react';
import Navbar from "./components/Navbar";
import  Footer from "./components/Footer";
import Filtering from "./components/Filter";

import { useState } from "react";




const App = () => {
  const [sortType, setSortType] = useState("");

  return (
    <>
      <Navbar  onSort={setSortType} />
      <Filtering sortType={sortType}/>
      <Footer />
    </>
  );
};

export default App;