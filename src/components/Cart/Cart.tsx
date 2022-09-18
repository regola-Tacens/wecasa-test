// library imports
import React from 'react'

// component imports
import CartItemsByGender from './CartItemsByGender'
import CartTotal from './CartTotal'

const Cart = () => {
  return (
    <div>
      <CartItemsByGender gender='Man' />
      <CartItemsByGender gender='Woman' />
      <CartItemsByGender gender='Child' />
      <CartTotal />
    </div>
  )
}

export default Cart