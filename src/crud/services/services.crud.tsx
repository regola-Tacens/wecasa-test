// library imports
import { weCasaAPI } from '../axios';
import axios from 'axios';

//types imports
import { HaircutType } from 'src/types/haircutsType';

export const fetchServices = (service: string) => weCasaAPI.get<HaircutType>(`/api/techtest/${service}`, {}).then(response => response.data)
