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

export type PresentationsStoreStateType = {
  prestations: prestationsStoreType
}

export type PrestationState = {
 prestations: prestationsStoreType,
 addPrestation: (prestation: prestationType, quantity: number, gender: GenderTypeReference) => void,
 removePrestation: (prestation: prestationType, gender: GenderTypeReference, currentQuantity?: number) => void,
 resetPrestation: (prestation: prestationType, gender: GenderTypeReference) => void
}

export const usePrestationsStore = create<PrestationState>((set) => ({
  prestations: initialPrestations,
  addPrestation: (prestation: prestationType, quantity: number, gender: GenderTypeReference) => set((state: PresentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: quantity
      }
    ]}
  })),
  removePrestation: (prestation: prestationType, gender: GenderTypeReference, currentQuantity?: number) => set((state: PresentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: currentQuantity && currentQuantity -1
      }
    ]}
  })),
  resetPrestation: (prestation: prestationType, gender: GenderTypeReference) => set((state: PresentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
    ]}
  }))
}))