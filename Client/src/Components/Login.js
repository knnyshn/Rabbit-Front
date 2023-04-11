import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signIn } from '../api/user'

export default function Login() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(text.toLowerCase())
    const response = await signIn(text.toLowerCase(), password)
    console.log(response.status);
    if (response.status === 200) {
      window.location.assign('/')
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
