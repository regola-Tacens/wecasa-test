// library import
import axios from 'axios';

export const weCasaAPI = axios.create({
  baseURL: import.meta.env.VITE_WEACASA_BASEURL,
  headers: {'accept': 'application/json'}
});