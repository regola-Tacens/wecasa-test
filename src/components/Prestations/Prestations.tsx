// library imports
import React, {useMemo, useState} from 'react';
import {ListBox} from 'primereact/listbox';

//helpers & hooks imports
import useFetch from '../../hooks/useFetch';
import {prestations} from '../../constants/prestationsConstants';

// component imports
import Spinner from '../UI/Spinner';
import ErrorToast from '../UI/ErrorToast';
import PrestationsGenderSelector from './PrestationsGenderSelector';

// crud imports
import {fetchPrestations} from '../../crud/prestations/prestations.crud';

// types imports
import {categoryType, GenderType, prestationType} from 'src/types/haircutsType';

const Prestations = () => {
  const [gender, setGender] = useState<GenderType>({reference: 'Man'})
  const {data: haircutsData, error: haircutsError, status: haircutStatus} = useFetch({
    queryRepo: prestations.HAIRCUT,
    apiCall: fetchPrestations(prestations.HAIRCUT),
  });

  const prestationsByGender = useMemo(():categoryType[] => {
    return haircutsData?.categories?.filter((category: categoryType) =>
      category.reference === gender.reference.toLowerCase())[0].prestations
  }, [gender, haircutsData?.categories]);

  const prestationsListTemplate = (option: prestationType) => {
    return (
      <div className='country-item'>
        {option.price}
        <div>{option.title}</div>
      </div>
    );
  };

  return (
    <div>
      <PrestationsGenderSelector setGender={setGender}/>
      <ListBox
        value={prestationsByGender}
        options={prestationsByGender}
        optionLabel='title'
        style={
          {
            width: '15rem',
            maxHeight: '250px',
            overflow: 'auto'}
        }
        onChange={e => console.log(e.value)}
        itemTemplate={prestationsListTemplate}
      />
      <Spinner loading={haircutStatus} />
      <ErrorToast error={haircutsError} />
    </div>
  )
}

export default Prestations;