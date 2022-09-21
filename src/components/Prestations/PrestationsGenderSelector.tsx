// library imports
import React, {Dispatch, SetStateAction} from 'react'

// component imports
import {Button} from 'primereact/button'

// type imports
import {GenderTypeReference} from '../../types/haircutsType'
import {gendersConstants} from '../../constants/commonConstants'

type ServicesGenderProps = {
  setGender: Dispatch<SetStateAction<{reference: GenderTypeReference}>>
}

const PrestationsGenderSelector = ({setGender}: ServicesGenderProps) => {
  const handleChooseGender = (gender: {reference: GenderTypeReference}) => {
    setGender(gender)
  }

  return (
    <div className='prestations-gender'>
      {
        Object.keys(gendersConstants).map((gender) => (
          <Button
            key={gender}
            className='p-button-rounded'
            onClick={() => handleChooseGender({reference: gendersConstants[gender as keyof typeof gendersConstants].reference})}
          >
            {gendersConstants[gender as keyof typeof gendersConstants].title}
          </Button>
        ))
      }
    </div>
  )
}

export default PrestationsGenderSelector