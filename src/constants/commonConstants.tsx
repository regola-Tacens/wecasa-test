import {GenderTypeReference} from '../types/haircutsType'

type GenderConstantsType = {
  [key in GenderTypeReference ]: {
    title: string,
    reference: 'Man' | 'Woman' | 'Child'
  }
}

export const gendersConstants: GenderConstantsType = {
  Man: {title: 'Homme', reference: 'Man'},
  Woman: {title: 'Femme', reference: 'Woman'},
  Child: {title: 'Enfant', reference: 'Child'}
}