// library imports
import React from 'react';
import {formatMultipliedPrice} from '../../helpers/formatPrice';

// type imports
import {prestationType} from 'src/types/haircutsType';

type CartItemProps = {
  prestation: prestationType
}
const CartItem = ({prestation}: CartItemProps) => {

  return (
    <div className='cart-item'>
      <div>
        {prestation.title} x {prestation.quantity}
      </div>
      {formatMultipliedPrice(prestation.quantity, prestation.price)}€
    </div>
  )
}

export default CartItem