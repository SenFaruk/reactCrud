// import React from 'react'

// const ProductList = ({ products }) => {
//     return (
//         <div>
//             <ul>
//                 {products.map((product) => (
//                 <li key={ product.id }> { product.title } - { product.price } </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
 
// export default ProductList


const ProductList = ({ products, deleteProduct }) => {
    return (
        <div>
            <ul>
                {products.map((product) => (
                <li key={ product.id }> { product.title } - { product.price } 
                    <button onClick={ () => deleteProduct(product.id) }>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
 
export default ProductList