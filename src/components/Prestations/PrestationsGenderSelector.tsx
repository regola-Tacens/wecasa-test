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
    <div>
      <Button onClick={() => handleChooseGender({reference: 'Man'})}>Man</Button>
      <Button onClick={() => handleChooseGender({reference: 'Woman'})}>Woman</Button>
      <Button onClick={() => handleChooseGender({reference: 'Child'})}>Child</Button>
    </div>
  )
}

export default PrestationsGenderSelector