import { TOKEN_NAME } from '@/constants'

/**
 * It returns the auth token in localStorage or sessionStorage depending of where it is stored.
 *
 * @returns It may returns the auth token if the user is authenticated.
 */
export const getAuthToken = (): string | null => {
  const token =
    localStorage.getItem(TOKEN_NAME) ?? sessionStorage.getItem(TOKEN_NAME)

  return token
}
