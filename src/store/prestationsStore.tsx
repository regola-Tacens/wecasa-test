// library imports
import create from 'zustand'

// type imports
import {prestationType} from 'src/types/haircutsType'

const initialPrestations = [
]
export const usePrestationsStore = create((set) => ({
  prestations: initialPrestations,
  addPrestation: (prestation: prestationType, quantity: number) => set((state) => ({
    prestations: [
      ...state.prestations.filter(prest => prest.reference !== prestation.reference)
      , {
        ...prestation, quantity: quantity
      }
    ]
  }))
}))