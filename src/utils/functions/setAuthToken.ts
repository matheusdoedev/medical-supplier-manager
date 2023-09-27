import { TOKEN_NAME } from '@/constants'

/**
 * This function stores the auth token in browser storages (local or session).
 *
 * @param token The new auth token to be store in any browser storage (local or session).
 * @param rememberMe It is a key to signals if the user wants to keep the token even if ends his current browser session.
 */
export const setAuthToken = (token: string, rememberMe?: boolean): void => {
  const newAuthToken = `Bearer ${token}`

  if (!rememberMe) {
    localStorage.setItem(TOKEN_NAME, newAuthToken)
    return
  }
  sessionStorage.setItem(TOKEN_NAME, newAuthToken)
}
