import React from "react";
import { ItemList } from "./components/ItemList";


import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shoppingcart } from "./components/Shoppingcart";
import { ShoppingCartProvider } from "./contents/ShoppingCartContext";

export const App = () => {
  return (

    <ShoppingCartProvider>
          <Router>
      <Navbar />
      <Routes>
      <Route path="/" element= {<ItemList />} />
      <Route path="/" element= {<Shoppingcart />} />


      </Routes>
      
    </Router>

    </ShoppingCartProvider>

  );
};


export default App
