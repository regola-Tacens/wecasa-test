// library imports
import React, {useMemo, useState} from 'react';
import {ListBox} from 'primereact/listbox';

//helpers & hooks imports
import useFetch from '../../hooks/useFetch';
import {services} from '../../constants/servicesConstants';

// component imports
import Spinner from '../UI/Spinner';
import ErrorToast from '../UI/ErrorToast';
import ServicesGenderSelector from './ServicesGenderSelector';

// crud imports
import {fetchServices} from '../../crud/services/services.crud';

// types imports
import {categoryType, GenderType} from 'src/types/haircutsType';

const Services = () => {
  const [gender, setGender] = useState<GenderType>({reference: 'Man'})
  const {data: haircutsData, error: haircutsError, status: haircutStatus} = useFetch({
    queryRepo: services.HAIRCUT,
    apiCall: fetchServices(services.HAIRCUT),
  });

  const prestationsByGender = useMemo(():categoryType[] => {
    return haircutsData?.categories?.filter((category: categoryType) =>
      category.reference === gender.reference.toLowerCase())[0].prestations
  }, [gender, haircutsData?.categories])

  return (
    <div>
      <ServicesGenderSelector setGender={setGender}/>
      <ListBox value={prestationsByGender} options={prestationsByGender} optionLabel='title' style={{width: '15rem', maxHeight: '20rem', overflow: 'auto'}} onChange={e => console.log(e.value.title)}/>
      <Spinner loading={haircutStatus} />
      <ErrorToast error={haircutsError} />
    </div>
  )
}

export default Services;