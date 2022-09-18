// library imports
import React from 'react';
import {prestationType} from '../types/haircutsType';
import {formatPrice} from '../helpers/formatPrice';

// type imports
import {prestationsStoreType, usePrestationsStore} from '../store/prestationsStore';

const useGetCartTotalDuration = () => {
  const prestations: prestationsStoreType = usePrestationsStore((state: any) => state.prestations)

  let duration = 0
  type genderType = 'Man' | 'Woman' | 'Child'
  const genders = ['Man', 'Woman', 'Child']

  const totalByGender = (gender: 'Man' | 'Woman' | 'Child') => prestations?.[gender]?.reduce((a: number, c: prestationType) => {
    return a + (c.duration * (c.quantity || 1))
  }, 0)

  for (let gender of genders as genderType[]) {
    duration += totalByGender(gender)
  }

  return duration
}

export default useGetCartTotalDuration