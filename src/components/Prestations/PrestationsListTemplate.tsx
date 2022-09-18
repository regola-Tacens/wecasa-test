// library imports
import React from 'react'

// helpers imports
import {formatPrice} from '../../helpers/formatPrice'

// type imports
import {prestationType} from '../../types/haircutsType'

const PrestationsListTemplate = (option: prestationType) => {
  return (
    <div className='prestation-item'>
      <div className='prestation-item_title'>{option.title}</div>
      <span className='prestation-item_price'>{formatPrice(option.price)} €</span>
    </div>
  );
}

export default PrestationsListTemplate