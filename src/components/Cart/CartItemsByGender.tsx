// library imports
import React from 'react';

// type imports
import {prestationsStoreType, usePrestationsStore} from '../../store/prestationsStore'
import {GenderTypeReference} from '../../types/haircutsType';

// component imports
import CartItem from './CartItem';

// style imports
import '../../styles/cart.css'

// constants imports
import {gendersConstants} from '../../constants/commonConstants';

type CartItemsByGenderProps = {
  gender: GenderTypeReference,
}
const CartItemsByGender = ({gender}: CartItemsByGenderProps) => {
  const prestations: prestationsStoreType = usePrestationsStore((state: any) => state.prestations)

  // do not show block if no prestations
  if (prestations?.[gender]?.length === 0) return null

  // sort block items by price
  prestations?.[gender]?.sort((a, b) => {return a.price - b.price})

  return (
    <div className='cart-items'>
      <h3>{gendersConstants[gender].title}</h3>
      {
        prestations?.[gender]?.map(prestation => (
          <CartItem key={prestation.title} prestation={prestation} />
        ))
      }
    </div>
  )
}

export default CartItemsByGender