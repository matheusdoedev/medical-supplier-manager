export const getAuthToken = (): string | null => {
  const token = localStorage.getItem('TOKEN') ?? sessionStorage.getItem('TOKEN')

  return token
}
