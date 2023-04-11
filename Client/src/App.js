import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import Home from './Components/Home';
import PostDetails from './Components/PostDetails';
import CreatePost from './Components/CreatePost';

export const AuthenticationContext = createContext()

function App() {

  let [user, setUser] = useState(localStorage.getItem("TOKEN") ? (localStorage.getItem("TOKEN")) : null)
  let contextData = {
    user: user,
    setUser: setUser,

  }
  return (
    <>

      <AuthenticationContext.Provider value={contextData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/signup' element={<Signup />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/burrow/:burrow/:postId/" element={<PostDetails />} />
        </Routes>
      </AuthenticationContext.Provider >
    </>


  );
}

export default App;