// library imports
import React from 'react';

// component imports
import CartItemsByGender from './CartItemsByGender';

const Cart = () => {

  return (
    <div>
      <CartItemsByGender gender='Man' />
      <CartItemsByGender gender='Woman' />
      <CartItemsByGender gender='Child' />
    </div>
  )
}

export default Cart