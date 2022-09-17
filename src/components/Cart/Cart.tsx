// library imports
import React from 'react';

// helpers & store imports
import {usePrestationsStore} from '../../store/prestationsStore';

const Cart = () => {
  const prestations = usePrestationsStore((state) => state.prestations)

  return (
    <div>
      {JSON.stringify(prestations)}
    </div>
  )
}

export default Cart