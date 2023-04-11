import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import PostDetails from './Components/PostDetails';
import Login from './Components/Accountlogin/Login';
import Signup from './Components/Accountlogin/Signup';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Routes>

//       </Routes>
//     </>
//   )
// }

export default App;
