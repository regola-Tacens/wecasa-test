// library imports
import React from 'react';
import {formatMultipliedPrice} from '../../helpers/formatPrice';

// type imports
import {prestationType} from '../../types/haircutsType';

type CartItemProps = {
  prestation: prestationType
}
const CartItem = ({prestation}: CartItemProps) => {
  const {quantity, title, price} = prestation

  return (
    <div className='cart-item'>
      <div>
        {title} x {quantity}
      </div>
      {formatMultipliedPrice(quantity, price)}€
    </div>
  )
}

export default CartItem