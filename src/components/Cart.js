import React, { useState, useContext, useEffect } from 'react'
import MyContext from '../context/MyContext'

function Cart() {
    const { cartItems, setCartItems } = useContext(MyContext)
    // const [mycartItems, setMycartItems] = useState(cartItems)
    const [price, setPrice] = useState(0)
    console.log("cartItems: ", cartItems)
    // console.log("myCartItems: ", cartItems)

    function handleIncrement(itemId) {
        let updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex(item => item.id === itemId);

        if (itemIndex !== -1) {
            updatedCartItems[itemIndex] = {
                ...updatedCartItems[itemIndex],
                amount: updatedCartItems[itemIndex].amount + 1
            };
            setCartItems(updatedCartItems);

        }

    }


    function handleDecrement(itemId) {
        let updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex(item => item.id === itemId);

        if (itemIndex !== -1 && updatedCartItems[itemIndex].amount > 1) {
            updatedCartItems[itemIndex] = {
                ...updatedCartItems[itemIndex], 
                amount: updatedCartItems[itemIndex].amount - 1
            };
            setCartItems(updatedCartItems)
        }
        
    }
    
    function CartDisplay() {
      return (
        <div>
            {
                cartItems.length > 0 ? (
                    <div>
                        <ul>
                            {
                                cartItems.map(item => (
                                    <div key={item.id}>
                                        <li>{item.title}</li>
                                        <button id={`decrement-btn-${item.id}`} onClick={() => handleDecrement(item.id)}>-</button>
                                        <span>{item.amount}</span>
                                        <button id={`increment-btn-${item.id}`} onClick={() => handleIncrement(item.id)}>+</button>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                ) : <p>Cart is currently empty</p>
            }
        </div>
      )
    }
    

    useEffect(() => {
        let res = cartItems.reduce((acc, val) => acc + val.price * val.amount, 0)
        console.log("🚀 ~ handlePrice ~ res:", res)
        setPrice(res)
    
    }, [cartItems])
    

    return (
        <div id='cart-items-list'>
            <h2>Cart</h2>
            <p id='cart-total-amount'>Price: {price}$</p>
            <CartDisplay/>
            <button id='clear-all-cart' onClick={() => setCartItems([])}>Clear Cart</button>

        </div>
    )
}

export default Cart



// cartITEMS = []

// Array.PUSH()

// UPDATE 


