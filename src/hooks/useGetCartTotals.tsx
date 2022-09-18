// library imports
import React from 'react'
import {GenderTypeReference, prestationType} from '../types/haircutsType'
import {formatPrice} from '../helpers/formatPrice'

// type imports
import {prestationsStoreType, usePrestationsStore} from '../store/prestationsStore'

// constant imports
import {gendersConstants} from '../constants/commonConstants'

const useGetCartTotals = () => {
  const prestations: prestationsStoreType = usePrestationsStore((state: any) => state.prestations)

  let totalDuration = 0
  let totalPrice = 0
  type genderType = GenderTypeReference
  const genders = Object.keys(gendersConstants)

  const totalDurationByGender = (gender: genderType) => prestations?.[gender]?.reduce((a: number, c: prestationType) => {
    return a + (c.duration * (c.quantity || 1))
  }, 0)

  const totalPriceByGender = (gender: 'Man' | 'Woman' | 'Child') => prestations?.[gender]?.reduce((a: number, c: prestationType) => {
    return a + Number(formatPrice(c.price) * (c.quantity || 1))
  }, 0)

  for (let gender of genders as genderType[]) {
    totalDuration += totalDurationByGender(gender)
    totalPrice += totalPriceByGender(gender)
  }

  return [totalDuration, totalPrice]
}

export default useGetCartTotals