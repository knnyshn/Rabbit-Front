import '../Styles/global.css'
import { useEffect, useRef, useState } from "react"
import { signIn } from '../api/user'

export default function SignIn({ visibility, sendDataToParent }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const signInModal = useRef(null)
    const backDropRef = useRef(null)
  
    useEffect(() => {
      setTimeout(() => {
        signInModal.current.style.opacity = '1'
        backDropRef.current.style.opacity = '0.5'
      }, 1)
    }, [visibility])
  
    async function handleSubmit(e) {
      e.preventDefault()
      const res = await signIn(username, password)
      if (res.login) {
        window.location.reload()
      } else {
        setError(res.message)
      }
    }
  
    function handleClose(e) {
      signInModal.current.style.opacity = '0'
      backDropRef.current.style.opacity = '0'
      setTimeout(() => {
        sendDataToParent(false);
      }, 300);
    }
  
  
    return (
      <>
        <div ref={backDropRef} className='backdrop'></div>
        <div ref={signInModal} className='signin-modal'>
          <div className="sign-in-modal-header">
            <span className='sign-in-modal-svg' onClick={handleClose}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                <path d="m6 6 20 20" ></path>
                <path d="m26 6-20 20" ></path>
              </svg>
            </span>
            <h1>Log in or create an account</h1>
          </div>
          <div className='signin-modal-input-area'>
            <h2>Welcome to Rabbit</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="username"
                placeholder="Username or E-mail"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p>We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="https://www.youtube.com/watch?v=wvVWyJavZJs">Privacy Policy</a></p>
              <p className='error-message'>{error}</p>
              <input type="submit" id="submit" value="Sign In" />
            </form>
          </div>
        </div>
      </>
    )
  }