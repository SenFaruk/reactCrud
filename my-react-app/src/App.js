import Event from "./components/Event";
import Header from "./components/Header";
import MapFunction from "./components/MapFunction";
import ProductList from "./components/ProductList";

import UseStateHook from "./components/UseStateHook";
import React, { useState } from "react";

function App() {
  const clickMe = (adın) => {
    console.log("ismin:" + adın);
  };

  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 899 },
    { id: 2, title: "Product 2", price: 982 },
    { id: 3, title: "Product 3", price: 322 },
    { id: 4, title: "Product 4", price: 763 },
    { id: 5, title: "Product 5", price: 389 },
  ]);

  return (
    <>
      {/* <div className="App">
  <Header/>
  <button onClick={()=>clickMe("faruk")}>clickme</button>
    </div> */}
      {/* <Event/> */}
      {/* <UseStateHook/> */}
      {/* <MapFunction/> */}
      <ProductList products={products} />
    </>
  );
}

export default App;
