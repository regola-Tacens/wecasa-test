// library imports
import React, {Dispatch, SetStateAction} from 'react';

// component imports
import {Button} from 'primereact/button';

// type imports
import {GenderType} from 'src/types/haircutsType';

type ServicesGenderProps = {
  setGender: Dispatch<SetStateAction<GenderType>>
}

const PrestationsGenderSelector = ({setGender}: ServicesGenderProps) => {
  const handleChooseGender = (gender: GenderType) => {
    setGender(gender)
  }

  return (
    <div className='prestations-gender'>
      {
        ['Man', 'Woman', 'Child'].map((gender: any) => (
          <Button key={gender} onClick={() => handleChooseGender({reference: gender})}>{gender}</Button>
        ))
      }
    </div>
  )
}

export default PrestationsGenderSelector