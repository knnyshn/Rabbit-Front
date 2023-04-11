import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../api/user'
import { AuthenticationContext } from '../App'

export default function Login() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  let { user, setUser } = useContext(AuthenticationContext)

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      console.log(text.toLowerCase())
      const response = await signIn(text.toLowerCase(), password)
      console.log(response);
      setUser(JSON.stringify(response))
      navigate('/')
    }
    catch (error) {
      console.log(error);
    }
  }



  return (

    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={text}
          onChange={e => setText(e.target.value)} />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <br></br>
        <button>Sign in</button>
        <br></br>
      </form>
      <span>
        <Link to='/auth/signup'>Go to Signup</Link>
      </span>
    </div>
  )
}
