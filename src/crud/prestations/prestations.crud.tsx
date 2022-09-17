// library imports
import {weCasaAPI} from '../axios';

//types imports
import {HaircutType} from 'src/types/haircutsType';

export const fetchPrestations = (service: string) => {
  return weCasaAPI
    .get<HaircutType>(`/api/techtest/${service}`, {})
    .then(response => response.data)
}