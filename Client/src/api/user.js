import api from './apiConfig'

const LOCALSTORAGE_KEY = 'TOKEN'

export async function signIn(username, password) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const { data } = await api.post("/auth/login/", { username: username.toLowerCase(), password: password }, config)
  console.log(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))

  return data
}

export async function signUp(username, password) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const { data } = await api.post("/auth/signup/", { username: username.toLowerCase(), password: password }, config)
  console.log(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))

  return data
}
