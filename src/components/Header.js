import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

function Nav() {
    const {cartItems} = useContext(MyContext)
  return (
    <div>
        <p>items in cart: <span id='nav-cart-item-count'>{cartItems.length}</span></p>
    </div>
  )
}

export default Nav