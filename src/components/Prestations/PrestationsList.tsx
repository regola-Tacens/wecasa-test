// library imports
import React, {useMemo} from 'react';
import {ListBox} from 'primereact/listbox';

// type imports
import {categoryType, GenderType, HaircutType, prestationType} from 'src/types/haircutsType';

// style imports
import '../../styles/prestations.css'

// helpers
import {formatPrice} from '../../helpers/formatPrice';
import {usePrestationsStore} from '../../store/prestationsStore';

type PrestationsListProps = {
  haircutsData: HaircutType,
  gender: GenderType
}

const PrestationsList = ({haircutsData, gender}: PrestationsListProps) => {
  const addPrestation = usePrestationsStore((state) => state.addPrestation)
  const prestations = usePrestationsStore((state) => state.prestations)

  const prestationsByGender = useMemo(():prestationType[] => {
    return haircutsData?.categories?.filter((category: categoryType) =>
      category.reference === gender.reference.toLowerCase())[0].prestations
  }, [gender, haircutsData?.categories]);

  const prestationsListTemplate = (option: prestationType) => {
    return (
      <div className='prestation-item'>
        <div className='prestation-item_title'>{option.title}</div>
        <span className='prestation-item_price'>{formatPrice(option.price)} </span>
      </div>
    );
  };
  const handleAddPrestation = (e) => {
    // TODO CHECK IF THE SAME PRESTATION EXISTS IN STORE
    const prestationAlreadyInStore = prestations?.find(prest => prest.reference === e.value.reference)
    const quantity = prestationAlreadyInStore ? prestationAlreadyInStore.quantity + 1 : 1
    addPrestation(e.value, quantity)
  }

  return (
    <div>
      <ListBox
        value={prestationsByGender}
        options={prestationsByGender}
        optionLabel='title'
        style={
          {
            width: '20rem',
            maxHeight: '250px',
            overflow: 'auto'}
        }
        onChange={handleAddPrestation}
        itemTemplate={prestationsListTemplate}
      />
    </div>
  )
}

export default PrestationsList