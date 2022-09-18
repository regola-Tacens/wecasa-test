// library imports
import React, {useMemo} from 'react'
import {ListBox, ListBoxChangeParams} from 'primereact/listbox'

// type imports
import {CategoryType, GenderType, HaircutType, PrestationType} from '../../types/haircutsType'

// style imports
import '../../styles/prestations.css'

// helpers
import {PrestationState, usePrestationsStore} from '../../store/prestationsStore'
import {computePrestationQuantity} from '../../helpers/computePrestationQuantity'
import PrestationsListTemplate from './PrestationsListTemplate'

type PrestationsListProps = {
  haircutsData: HaircutType,
  gender: GenderType
}

const PrestationsList = ({haircutsData, gender}: PrestationsListProps) => {
  const {prestations, addPrestation} = usePrestationsStore((state: PrestationState) => state)

  const prestationsByGender = useMemo(():PrestationType[] => {
    return haircutsData?.categories?.filter((category: CategoryType) =>
      category.reference === gender.reference.toLowerCase())[0].prestations
  }, [gender, haircutsData?.categories]);

  const handleAddPrestation = (e: ListBoxChangeParams) => {
    const quantity = computePrestationQuantity(prestations, gender, e)
    addPrestation(e.value, quantity, gender.reference)
  }

  return (
    <div>
      <ListBox
        value={prestationsByGender}
        options={prestationsByGender}
        optionLabel='title'
        style={
          {
            width: '400px',
            height: '200px',
            overflow: 'auto'}
        }
        onChange={handleAddPrestation}
        itemTemplate={PrestationsListTemplate}
      />
    </div>
  )
}

export default PrestationsList