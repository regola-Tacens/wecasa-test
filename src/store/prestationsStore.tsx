// library imports
import create from 'zustand'

// type imports
import {GenderTypeReference, prestationType} from '../types/haircutsType'

const initialPrestations = {
  'Man': [],
  'Woman': [],
  'Child': []
}
export type prestationsStoreType = {
    'Man': prestationType[],
    'Woman': prestationType[],
    'Child': prestationType[]
}

export type presentationsStoreStateType = {
  prestations: prestationsStoreType
}

export const usePrestationsStore = create((set) => ({
  prestations: initialPrestations,
  addPrestation: (prestation: prestationType, quantity: number, gender: GenderTypeReference) => set((state: presentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: quantity
      }
    ]}
  })),
  removePrestation: (prestation: prestationType, gender: GenderTypeReference, currentQuantity: number) => set((state: presentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: currentQuantity -1
      }
    ]}
  })),
  resetPrestation: (prestation: prestationType, gender: GenderTypeReference) => set((state: presentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
    ]}
  }))
}))