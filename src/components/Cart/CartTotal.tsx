// library imports
import React from 'react';

// helpers & hooks imports
import useGetCartTotals from '../../hooks/useGetCartTotals';

const CartTotal = () => {
  const [totalDuration, totalPrice] = useGetCartTotals()

  return (
    <div className='cart-total'>
      <h3 className='cart-total__price'>
        Total: {totalPrice} €
      </h3>
      <h3 className='cart-total__duration'>
        Duration: {totalDuration} Min
      </h3>
    </div>
  )
}

export default CartTotal