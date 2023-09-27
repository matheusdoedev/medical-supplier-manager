import { TOKEN_NAME } from '@/constants'

/**
 * This function cleans auth token in localStorage and session storage in order to logout user.
 */
export const cleanAuthToken = () => {
  localStorage.removeItem(TOKEN_NAME)
  sessionStorage.removeItem(TOKEN_NAME)
}
