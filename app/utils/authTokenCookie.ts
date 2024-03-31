import { cookies } from 'next/headers'

const cookieStore = cookies()

const setCookie = (token: string, expires: number) => {
  if (!cookieStore.has('token')) {
    cookieStore.set('token', token, { expires })
  }
}

const getCookie = (): string => {
  const token = cookieStore.get('token')
  
  if (token) return token.value
  return ''
}

const deleteCookie = () => {
  cookieStore.delete('token')
}

export { setCookie, getCookie, deleteCookie }