import React, { useContext } from 'react'
import MyContext from '../context/MyContext';


// let productList = [
//     {
//         id: 1,
//         title: "Samsung Galaxy S7",
//         price: 599.99,
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
//         amount: 1,
//     },
//     {
//         id: 2,
//         title: "google pixel ",
//         price: 499.99,
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
//         amount: 1,
//     },
//     {
//         id: 3,
//         title: "Xiaomi Redmi Note 2",
//         price: 699.99,
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
//         amount: 1,
//     },
// ];


function Products() {
    const {products, addToCart} = useContext(MyContext)
    console.log(products)
    


    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.img} alt={product.title}/>
                        <p id={`cart-item-price-${product.id}`}>Price: {product.price}</p>
                        <p id={`cart-amount-${product.id}`}>Amount: {product.amount}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products