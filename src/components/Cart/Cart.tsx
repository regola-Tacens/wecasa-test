// library imports
import React from 'react';

// helpers & store imports
import {prestationsStoreType, usePrestationsStore} from '../../store/prestationsStore';

const Cart = () => {
  const prestations: prestationsStoreType = usePrestationsStore((state: any) => state.prestations)

  return (
    <div>
      {JSON.stringify(prestations)}
    </div>
  )
}

export default Cart