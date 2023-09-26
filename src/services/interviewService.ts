import axios from 'axios'

import { GET_MEDICATIONS_PARAMS_DEFAULT_VALUE } from '@/constants'

import {
  LoginDto,
  LoginResponse,
  GetMedicationsParams,
  GetMedicationsResponse,
} from '@/interfaces'
import { getAuthToken } from '@/utils'

const interviewAPI = axios.create({
  baseURL: import.meta.env.VITE_INTERVIEW_API_URL,
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

    return interviewAPI.get<GetMedicationsResponse>('/medications', {
      params: serializedParams,
      headers: {
        Authorization: getAuthToken(),
      },
    })
  },
}
