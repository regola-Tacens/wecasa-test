
// type imports
import {ListBoxChangeParams} from 'primereact/listbox'
import {prestationsStoreType} from 'src/store/prestationsStore'
import {GenderType, prestationType} from '../types/haircutsType'

export const computePrestationQuantity = (prestations: prestationsStoreType, gender: GenderType, e: ListBoxChangeParams) => {
  // check if the same presentation already exists in store
  const prestationAlreadyInStore = prestations?.[gender.reference]?.find((prest: prestationType) => prest.reference === e.value.reference)
  // if it does, add to its quantity, if not quantity is = 1
  return prestationAlreadyInStore && prestationAlreadyInStore.quantity ? prestationAlreadyInStore.quantity + 1 : 1
}