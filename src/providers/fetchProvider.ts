import axios from 'axios'

export const fetchProvider = (baseURL?: string) => axios.create({ baseURL })
