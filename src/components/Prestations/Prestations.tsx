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
import {categoryType, GenderType} from 'src/types/haircutsType';

const Prestations = () => {
  const [gender, setGender] = useState<GenderType>({reference: 'Man'})
  const {data: haircutsData, error: haircutsError, status: haircutStatus} = useFetch({
    queryRepo: prestations.HAIRCUT,
    apiCall: fetchPrestations(prestations.HAIRCUT),
  });

  const prestationsByGender = useMemo(():categoryType[] => {
    return haircutsData?.categories?.filter((category: categoryType) =>
      category.reference === gender.reference.toLowerCase())[0].prestations
  }, [gender, haircutsData?.categories])

  return (
    <div>
      <PrestationsGenderSelector setGender={setGender}/>
      <ListBox value={prestationsByGender} options={prestationsByGender} optionLabel='title' style={{width: '15rem', maxHeight: '20rem', overflow: 'auto'}} onChange={e => console.log(e.value)}/>
      <Spinner loading={haircutStatus} />
      <ErrorToast error={haircutsError} />
    </div>
  )
}

export default Prestations;