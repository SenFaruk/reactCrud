import React, { useState } from "react";

const MapFunction = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 899 },
    { id: 2, title: "Product 2", price: 982 },
    { id: 3, title: "Product 3", price: 322 },
    { id: 4, title: "Product 4", price: 763 },
    { id: 5, title: "Product 5", price: 389 },
  ]);

  return (
    <>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.id} ==== {product.title} - {product.price}
            </li>
          ))}
        </ul>
        <hr />
       <ul>
        {products.map((product)=>(
          <li>
            {product.title}
          </li>
        ))}
       </ul>
      </div>
    </>
  );
};

export default MapFunction;
