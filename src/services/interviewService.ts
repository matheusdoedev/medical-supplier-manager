import axios from 'axios'

import { LoginDto, LoginResponse } from '@/interfaces'

const interviewAPI = axios.create({
  baseURL: import.meta.env.VITE_INTERVIEW_API_URL,
})

export const interviewService = {
  postLogin(loginDto: LoginDto) {
    return interviewAPI.post<LoginResponse>('/login', loginDto)
  },
}
