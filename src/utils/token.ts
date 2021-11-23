import Cookies from 'js-cookie'

export const setTokenCookie = (token: string) => {
  Cookies.set('token', token)
}

export const deleteTokenCookie = () => {
  Cookies.remove('token')
}

export const getToken = () => {
  return Cookies.get('token')
}
