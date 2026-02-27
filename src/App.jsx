import React from 'react';
import Navbar from "./components/Navbar";
import  Footer from "./components/Footer";
import Filtering from "./components/Filter";
import { Provider } from "react-redux";
import { store } from "./store";

import { useState } from "react";




const App = () => {
  const [sortType, setSortType] = useState("");

  return (
    <>
      <Provider store={store}>
      <Navbar  onSort={setSortType} />
      <Filtering sortType={sortType}/>
      <Footer />
      </Provider>
    </>
  );
};

export default App;