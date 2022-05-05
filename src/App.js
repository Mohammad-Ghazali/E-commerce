import React from "react";
import { Route, Routes } from "react-router-dom";

import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Container from "./Container";
import Search from "./Search";


function App() {
  return (
    <div>
       
      <Container />

      <main>
        <Routes>
        <Route path="/search" element={<Search />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
