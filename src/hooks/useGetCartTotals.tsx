// library imports
import React from 'react'

// helpers imports
import {formatPrice} from '../helpers/formatPrice'

// type imports
import {GenderTypeReference, prestationType} from '../types/haircutsType'
import {prestationsStoreType, PrestationState, usePrestationsStore} from '../store/prestationsStore'

// constant imports
import {gendersConstants} from '../constants/commonConstants'

const useGetCartTotals = () => {
  const prestations: prestationsStoreType = usePrestationsStore((state: PrestationState) => state.prestations)

  let totalDuration = 0
  let totalPrice = 0
  const genders = Object.keys(gendersConstants)

  const totalDurationByGender = (gender: GenderTypeReference) => prestations?.[gender]?.reduce((a: number, c: prestationType) => {
    return a + (c.duration * (c.quantity || 1))
  }, 0)

  const totalPriceByGender = (gender: GenderTypeReference) => prestations?.[gender]?.reduce((a: number, c: prestationType) => {
    return a + Number(formatPrice(c.price) * (c.quantity || 1))
  }, 0)

  for (let gender of genders as GenderTypeReference[]) {
    totalDuration += totalDurationByGender(gender)
    totalPrice += totalPriceByGender(gender)
  }

  return [totalDuration, totalPrice.toFixed(2)]
}

export default useGetCartTotals