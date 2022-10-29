import React from 'react'
import { NavLink, Link  } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const CartBtn = () => {

  
  return (
    
      
      <div>
         <Link
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-toggle="modal"
        data-target="#loginModal"
      >
        <span className='fa fa-sign-in me-1'></span>Cart(0)
      </Link>

      </div>
      

  )
}


export default CartBtn