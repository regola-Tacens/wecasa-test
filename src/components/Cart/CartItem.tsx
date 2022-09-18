// library imports
import React from 'react';

//helpers imports
import {formatMultipliedPrice} from '../../helpers/formatPrice';
import {PrestationState, usePrestationsStore} from '../../store/prestationsStore';

// component imports
import {Button} from 'primereact/button';

// type imports
import {GenderTypeReference, PrestationType} from '../../types/haircutsType';

// style imports
import '../../styles/cart.css'

type CartItemProps = {
  prestation: PrestationType,
  gender: GenderTypeReference
}
const CartItem = ({prestation, gender}: CartItemProps) => {
  const {quantity, title, price} = prestation
  const {removePrestation, resetPrestation} = usePrestationsStore((state:PrestationState) => state)
  const handleDeletePrestation = () => {
    quantity && quantity < 2 ?
      resetPrestation(prestation, gender) :
      removePrestation(prestation, gender, quantity)
  }

  return (
    <div className='cart-item'>
      <div>
        {title} x {quantity}
      </div>
      <div className='cart-item__price'>
        {formatMultipliedPrice(quantity, price)}€
        <Button
          icon='pi pi-times'
          className='p-button-rounded p-button-danger p-button-outlined'
          aria-label='Annuler'
          style={{width: '20px', height: '20px', marginLeft: '10px'}}
          onClick={handleDeletePrestation}
        />
      </div>
    </div>
  )
}

export default CartItem