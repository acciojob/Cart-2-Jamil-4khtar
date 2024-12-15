import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

function Header() {
    const {cartItems} = useContext(MyContext)
  return (
    <div>
        <p id='nav-cart-item-count'>items in cart: {cartItems.length}</p>
    </div>
  )
}

export default Header