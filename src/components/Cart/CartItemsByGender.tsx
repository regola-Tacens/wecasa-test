// library imports
import React from 'react';

// type imports
import {prestationsStoreType, usePrestationsStore} from '../../store/prestationsStore'

// component imports
import CartItem from './CartItem';

// style imports
import '../../styles/cart.css'

type CartItemsByGenderProps = {
  gender: 'Man' | 'Woman' | 'Child',
}
const CartItemsByGender = ({gender}: CartItemsByGenderProps) => {
  const prestations: prestationsStoreType = usePrestationsStore((state: any) => state.prestations)
  if (prestations?.[gender]?.length === 0) return null
  prestations?.[gender]?.sort((a, b) => {return a.price - b.price})

  return (
    <div className='cart-items'>
      <h2>{gender}</h2>
      {
        prestations?.[gender]?.map(prestation => (
          <CartItem key={prestation.title} prestation={prestation} />
        ))
      }
    </div>
  )
}

export default CartItemsByGender