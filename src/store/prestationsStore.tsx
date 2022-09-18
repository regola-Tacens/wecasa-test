// library imports
import create from 'zustand'

// type imports
import {GenderTypeReference, PrestationType} from '../types/haircutsType'

const initialPrestations = {
  'Man': [],
  'Woman': [],
  'Child': []
}
export type prestationsStoreType = {
    'Man': PrestationType[],
    'Woman': PrestationType[],
    'Child': PrestationType[]
}

export type PresentationsStoreStateType = {
  prestations: prestationsStoreType
}

export type PrestationState = {
 prestations: prestationsStoreType,
 addPrestation: (prestation: PrestationType, quantity: number, gender: GenderTypeReference) => void,
 removePrestation: (prestation: PrestationType, gender: GenderTypeReference, currentQuantity?: number) => void,
 resetPrestation: (prestation: PrestationType, gender: GenderTypeReference) => void
}

export const usePrestationsStore = create<PrestationState>((set) => ({
  prestations: initialPrestations,
  addPrestation: (prestation: PrestationType, quantity: number, gender: GenderTypeReference) => set((state: PresentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: quantity
      }
    ]}
  })),
  removePrestation: (prestation: PrestationType, gender: GenderTypeReference, currentQuantity?: number) => set((state: PresentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: currentQuantity && currentQuantity -1
      }
    ]}
  })),
  resetPrestation: (prestation: PrestationType, gender: GenderTypeReference) => set((state: PresentationsStoreStateType) => ({
    prestations: {...state.prestations, [gender]: [
      ...state.prestations?.[gender]?.filter(prest => prest.reference !== prestation.reference)
    ]}
  }))
}))