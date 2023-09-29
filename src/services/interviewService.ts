import axios, { HttpStatusCode } from 'axios'

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
import { cleanAuthToken, getAuthToken } from '@/utils'

const interviewAPI = axios.create({
  baseURL: import.meta.env.VITE_INTERVIEW_API_URL,
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
    if (
      error.response.data.message === 'Invalid token.' ||
      error.response.status === HttpStatusCode.Unauthorized
    ) {
      cleanAuthToken()
      location.replace('/?sessionExpired=true')
    }
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
