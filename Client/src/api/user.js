import api from './apiConfig.js'

const LOCALSTORAGE_KEY = 'TOKEN'

export async function signIn(username, password) {
  const response = await api.post('/auth/login', {
    username, password
  })
  console.log({ username });
  console.log({ password });
  localStorage.setItem(LOCALSTORAGE_KEY, response.data)

  return response
}

export async function signUp(username, password) {
  const response = await api.post('/auth/signup', {
    username, password
  })
  localStorage.setItem(LOCALSTORAGE_KEY, response.data)
  return response.data
}