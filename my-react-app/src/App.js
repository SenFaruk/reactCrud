// import Event from "./components/Event";
// import Header from "./components/Header";
// import MapFunction from "./components/MapFunction";
// import ProductList from "./components/ProductList";

// import UseStateHook from "./components/UseStateHook";
// import React, { useState } from "react";

// function App() {
//   const clickMe = (adın) => {
//     console.log("ismin:" + adın);
//   };

//   const [products, setProducts] = useState([
//     { id: 1, title: "Product 1", price: 899 },
//     { id: 2, title: "Product 2", price: 982 },
//     { id: 3, title: "Product 3", price: 322 },
//     { id: 4, title: "Product 4", price: 763 },
//     { id: 5, title: "Product 5", price: 389 },
//   ]);

//   return (
//     <>
//       {/* <div className="App">
//   <Header/>
//   <button onClick={()=>clickMe("faruk")}>clickme</button>
//     </div> */}
//       {/* <Event/> */}
//       {/* <UseStateHook/> */}
//       {/* <MapFunction/> */}
//       <ProductList products={products} />
//     </>
//   );
// }

// export default App;

// ===============================00

// import { useState,useEffect } from "react"
// import ProductList from "./components/ProductList";

// function App() {
//   const [products, setProducts] = useState([
//     {id: 1, title: 'Product 1', price: 899},
//     {id: 2, title: 'Product 2', price: 982},
//     {id: 3, title: 'Product 3', price: 322},
//     {id: 4, title: 'Product 4', price: 763},
//     {id: 5, title: 'Product 5', price: 389}
//   ]);

//   const deleteProduct = (productId) => {
//     const newProducts = products.filter(product => product.id !== productId);
//     setProducts(newProducts);
//   }

//   useEffect(() => {
//     console.log('Use Effect Running');
//   }, []);

//   return (
//     <div>
//       <ProductList products={ products } deleteProduct={ deleteProduct } />
//     </div>
//   );
// }

// export default App;
// ======================

// herhangibir durum değişikliğindede useEffect kullanıla bilir
// şöyleki

// import { useState, useEffect } from "react"
// import ProductList from "./components/ProductList";

// function App() {
//   const [products, setProducts] = useState([
//     {id: 1, title: 'Product 1', price: 899},
//     {id: 2, title: 'Product 2', price: 982},
//     {id: 3, title: 'Product 3', price: 322},
//     {id: 4, title: 'Product 4', price: 763},
//     {id: 5, title: 'Product 5', price: 389}
//   ]);

//   const [name, setName] = useState('Fikri');

//   const deleteProduct = (productId) => {
//     const newProducts = products.filter(product => product.id !== productId);
//     setProducts(newProducts);
//   }

//   useEffect(() => {
//     console.log('Use Effect Running');
//   }, [name]);

//   return (
//     <div>
//       <ProductList products={ products } deleteProduct={ deleteProduct } />
//       <button onClick={ () => setName('John') }>Change Name</button>
//       <p>Name: { name }</p>
//     </div>
//   );
// }

// export default App;

// ================

// #10. React Router

import { useState } from "react";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 899 },
    { id: 2, title: "Product 2", price: 982 },
    { id: 3, title: "Product 3", price: 322 },
    { id: 4, title: "Product 4", price: 763 },
    { id: 5, title: "Product 5", price: 389 },
  ]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={products} deleteProduct={deleteProduct} />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
