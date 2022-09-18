// library imports
import React, {Dispatch, SetStateAction} from 'react'

// component imports
import {Button} from 'primereact/button'

// type imports
import {GenderType} from '../../types/haircutsType'
import {gendersConstants} from '../../constants/commonConstants'

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
        Object.keys(gendersConstants).map((gender: any) => (
          <Button
            key={gender}
            // @ts-ignore
            onClick={() => handleChooseGender({reference: gendersConstants[gender].reference})}
          >
            {/* @ts-ignore */}
            {gendersConstants[gender].title}
          </Button>
        ))
      }
    </div>
  )
}

export default PrestationsGenderSelector