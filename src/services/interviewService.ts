import axios from 'axios'

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

export const interviewService = {
  postLogin(loginDto: LoginDto) {
    return interviewAPI.post<LoginResponse>('/login', loginDto)
  },

  getMedications(
    params: GetMedicationsParams = {
      page: 1,
      limit: 10,
    },
  ) {
    return interviewAPI.get<GetMedicationsResponse>('/medications', {
      params,
      headers: {
        Authorization: getAuthToken(),
      },
    })
  },
}
