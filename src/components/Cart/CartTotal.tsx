// library imports
import React from 'react';
import useGetCartTotalDuration from '../../hooks/useGetCartTotalDuration';
import useGetCartTotalPrice from '../../hooks/useGetCartTotalPrice';

const CartTotal = () => {
  const Total = useGetCartTotalPrice()
  const duration = useGetCartTotalDuration()

  return (
    <div>
      Total: {Total} €
      Duration: {duration} Min
    </div>
  )
}

export default CartTotal