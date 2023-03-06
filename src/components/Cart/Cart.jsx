import React from 'react'

export const Cart = () => {
    
    if(!sessionStorage.getItem("cart")){
        return(
            <div className="container mt-5 mb-5 pt-5 pb-5 text-center">
                <h1 className="mb-5">Your Cart is Empty</h1>
                <button className="custom-btn mt-5">Shop Now</button>
            </div>
        )
    }
  return (
    <div>Cart</div>
  )
}
