export const setAuthToken = (token: string, rememberMe?: boolean): void => {
  if (!rememberMe) {
    localStorage.setItem('TOKEN', `Bearer ${token}`)
    return
  }
  sessionStorage.setItem('TOKEN', `Bearer ${token}`)
}
