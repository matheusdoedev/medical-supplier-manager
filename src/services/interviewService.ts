import axios from 'axios'

import { GET_MEDICATIONS_PARAMS_DEFAULT_VALUE } from '@/constants'
import {
  CreateMedicineDto,
  LoginDto,
  LoginResponse,
  GetMedicationsParams,
  GetWithPagination,
  Medication,
  Manufacturer,
} from '@/interfaces'
import { getAuthToken } from '@/utils'

const interviewAPI = axios.create({
  baseURL: 'https://djbnrrib9e.execute-api.us-east-2.amazonaws.com/v1',
})

interviewAPI.interceptors.request.use((config) => {
  const authToken = getAuthToken()

  if (!authToken) return config

  config.headers.Authorization = authToken

  return config
})

interviewAPI.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error.response)
  },
)

export const interviewService = {
  postLogin(loginDto: LoginDto) {
    return interviewAPI.post<LoginResponse>('/login', loginDto)
  },

  getMedications({
    page,
    limit,
    search,
  }: GetMedicationsParams = GET_MEDICATIONS_PARAMS_DEFAULT_VALUE) {
    const serializedParams: GetMedicationsParams = {
      page,
      limit,
    }

    if (search) serializedParams.search = search

    return interviewAPI.get<GetWithPagination<Medication>>('/medications', {
      params: serializedParams,
    })
  },

  postMedications(createMedicationDto: CreateMedicineDto) {
    return interviewAPI.post('/medications', createMedicationDto)
  },

  getManufacturers() {
    return interviewAPI.get<GetWithPagination<Manufacturer>>('/manufacturers')
  },
}
