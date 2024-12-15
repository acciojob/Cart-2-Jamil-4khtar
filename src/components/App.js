import React, {useState} from 'react'
import Nav from './Header'
import Cart from './Cart'
import Products from './Products'

import MyContext from '../context/MyContext'


function App() {
  const [cartItems, setCartItems] = useState([])
  // console.log(cartItems)

  const products = [
    {
        id: 1,
        title: "Samsung Galaxy S7",
        price: 599.99,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
        amount: 1,
    },
    {
        id: 2,
        title: "google pixel ",
        price: 499.99,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
        amount: 1,
    },
    {
        id: 3,
        title: "Xiaomi Redmi Note 2",
        price: 699.99,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
        amount: 1,
    },
];

  const addToCart = (product) => {
    if (cartItems.find(ele => ele.title == product.title)) {
      alert("Item already added in cart")
      return
    } else {
      setCartItems([...cartItems, product])
      return
    }
  }

  return (
    <div id='main'>
      <MyContext.Provider value={
        {
          products: products,
          cartItems: cartItems,
          addToCart: addToCart,
          setCartItems: setCartItems
        }
      }>

        <Nav />
        <Cart />
        <Products />
        
      </MyContext.Provider>
    </div>
  )
}

export default App