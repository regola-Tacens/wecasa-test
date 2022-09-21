// library imports
import React, {useState} from 'react'

//helpers & hooks imports
import useFetch from '../../hooks/useFetch'
import {prestations} from '../../constants/prestationsConstants'

// component imports
import Spinner from '../UI/Spinner'
import ErrorToast from '../UI/ErrorToast'
import PrestationsGenderSelector from './PrestationsGenderSelector'
import PrestationsList from './PrestationsList'

// crud imports
import {fetchPrestations} from '../../crud/prestations/prestations.crud'

// types imports
import {GenderType, GenderTypeReference} from '../../types/haircutsType'

const Prestations = () => {
  const [gender, setGender] = useState<{reference: GenderTypeReference}>({reference: 'Man'})
  const {data: haircutsData, error: haircutsError, status: haircutStatus} = useFetch({
    queryRepo: prestations.HAIRCUT,
    apiCall: fetchPrestations(prestations.HAIRCUT),
  });

  return (
    <div>
      <PrestationsGenderSelector setGender={setGender}/>
      <PrestationsList gender={gender} haircutsData={haircutsData} />
      <Spinner loading={haircutStatus} />
      <ErrorToast error={haircutsError} />
    </div>
  )
}

export default Prestations;